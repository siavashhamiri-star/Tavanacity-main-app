'use client';
import { useState } from 'react';
import { useCollection, useFirestore, useUser } from '@/firebase';
import { collection, addDoc, serverTimestamp, query, orderBy } from 'firebase/firestore';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Star, StarHalf, ThumbsUp } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { toast } from '@/hooks/use-toast';
import type { Review } from '@/lib/types';
import { formatDistanceToNow } from 'date-fns';
import { errorEmitter } from '@/firebase/error-emitter';
import { FirestorePermissionError } from '@/firebase/errors';

function StarRating({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex items-center">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={`full-${i}`} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
      ))}
      {halfStar && <StarHalf className="w-5 h-5 text-yellow-400 fill-yellow-400" />}
      {[...Array(emptyStars)].map((_, i) => (
        <Star key={`empty-${i}`} className="w-5 h-5 text-yellow-200 fill-yellow-200" />
      ))}
    </div>
  );
}

function ReviewForm({ vendorId, vendorUserId }: { vendorId: string; vendorUserId: string }) {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [hoverRating, setHoverRating] = useState(0);
  const firestore = useFirestore();
  const { data: user } = useUser();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      toast({ title: "Please log in to leave a review.", variant: "destructive"});
      return;
    }
    if (rating === 0 || comment.trim() === '') {
      toast({ title: "Please provide a rating and a comment.", variant: "destructive"});
      return;
    }
    if (user.uid === vendorUserId) {
      toast({ title: "You cannot review your own showroom.", variant: "destructive"});
      return;
    }

    const reviewsCollection = collection(firestore, 'vendors', vendorId, 'reviews');
    const reviewData = {
        rating,
        comment,
        vendorId,
        userId: user.uid,
        reviewerName: user.displayName,
        reviewerImage: user.photoURL,
        createdAt: serverTimestamp(),
      };
    
    addDoc(reviewsCollection, reviewData)
        .then(() => {
            toast({ title: "Review submitted successfully!" });
            setRating(0);
            setComment('');
        })
        .catch(serverError => {
            console.error('Error submitting review to Firestore:', serverError);
            const permissionError = new FirestorePermissionError({
                path: reviewsCollection.path,
                operation: 'create',
                requestResourceData: reviewData
            });
            errorEmitter.emit('permission-error', permissionError);
            toast({ title: "Error submitting review", description: serverError.message, variant: "destructive"});
        });
  };

  return (
    <Card>
        <CardHeader>
            <CardTitle>Leave a Review</CardTitle>
            <CardDescription>Share your experience with this vendor.</CardDescription>
        </CardHeader>
        <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex items-center gap-2">
                <p>Your Rating:</p>
                <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                    key={star}
                    className={`w-6 h-6 cursor-pointer ${
                        (hoverRating || rating) >= star
                        ? 'text-yellow-400 fill-yellow-400'
                        : 'text-gray-300'
                    }`}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    onClick={() => setRating(star)}
                    />
                ))}
                </div>
            </div>
            <Textarea
                placeholder="Write your review here..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                rows={4}
            />
            <Button type="submit">Submit Review</Button>
            </form>
        </CardContent>
    </Card>
  );
}

export function ReviewsSection({ vendorId, vendorUserId }: { vendorId: string; vendorUserId: string }) {
  const firestore = useFirestore();
  const { data: user } = useUser();
  const reviewsRef = collection(firestore, 'vendors', vendorId, 'reviews');
  const reviewsQuery = query(reviewsRef, orderBy('createdAt', 'desc'));
  const { data: reviews, loading } = useCollection(reviewsQuery);
  
  const typedReviews = (reviews as Review[]) || [];
  const averageRating = typedReviews.length > 0 ? typedReviews.reduce((acc, r) => acc + r.rating, 0) / typedReviews.length : 0;
  
  const canReview = user && user.uid !== vendorUserId;

  return (
    <div className="space-y-12">
        <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
                <Card>
                    <CardHeader>
                        <CardTitle>Average Rating</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col items-center justify-center gap-2">
                        <p className="text-5xl font-bold">{averageRating.toFixed(1)}</p>
                        <StarRating rating={averageRating} />
                        <p className="text-sm text-muted-foreground">Based on {typedReviews.length} reviews</p>
                    </CardContent>
                </Card>
            </div>
            <div className="md:col-span-2">
                 {canReview && <ReviewForm vendorId={vendorId} vendorUserId={vendorUserId}/>}
                 {!user && (
                    <Card>
                        <CardContent className="p-6 text-center">
                            <p className="text-muted-foreground">Please <a href="/login" className="underline text-primary">log in</a> to leave a review.</p>
                        </CardContent>
                    </Card>
                 )}
                 {user && !canReview && (
                     <Card>
                        <CardContent className="p-6 text-center">
                            <p className="text-muted-foreground">You cannot review your own showroom.</p>
                        </CardContent>
                    </Card>
                 )}
            </div>
        </div>

        <div>
            <h3 className="text-2xl font-headline mb-6">Buyer Experiences</h3>
            {loading && <p>Loading reviews...</p>}
            {!loading && typedReviews.length === 0 && (
                <Card>
                    <CardContent className="flex flex-col items-center justify-center text-center text-muted-foreground h-48">
                        <ThumbsUp className="w-12 h-12 mb-4 text-muted-foreground/50"/>
                        <p>No reviews yet.</p>
                        <p className="text-sm">Be the first to share your experience!</p>
                    </CardContent>
                </Card>
            )}
            <div className="space-y-6">
            {typedReviews.map((review) => (
                <Card key={review.id}>
                    <CardHeader>
                       <div className="flex items-start gap-4">
                           <Avatar className="w-12 h-12">
                                <AvatarImage src={review.reviewerImage} alt={review.reviewerName} />
                                <AvatarFallback>{review.reviewerName.charAt(0)}</AvatarFallback>
                           </Avatar>
                           <div className="flex-1">
                               <div className="flex justify-between items-start">
                                    <div>
                                        <p className="font-semibold">{review.reviewerName}</p>
                                        <p className="text-xs text-muted-foreground">
                                        {review.createdAt ? formatDistanceToNow(review.createdAt.toDate(), { addSuffix: true }) : ''}
                                        </p>
                                    </div>
                                    <StarRating rating={review.rating} />
                               </div>
                               <p className="mt-2 text-sm text-foreground/80">{review.comment}</p>
                           </div>
                       </div>
                    </CardHeader>
                </Card>
            ))}
            </div>
        </div>
    </div>
  );
}