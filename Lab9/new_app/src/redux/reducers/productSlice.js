import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
    name: 'product',
    initialState: {
        reviews: {}
    },
    reducers: {
        setProductReview: (state, action) => {
            console.log('Previous state of reviews:', state.reviews);
            const { productId, review } = action.payload;
            if (!state.reviews[productId]) {
                state.reviews[productId] = [review];
            } else {
                state.reviews[productId].push(review);
            }
            console.log('Next state of reviews:', state.reviews);
        },
        setReviewCount: (state, action) => {
            console.log('Previous state of reviews count:', state.reviewCount);
            const productId = action.payload;
            const reviewCount = state.reviews[productId] ? state.reviews[productId].length : 0;
            state.reviewCount = reviewCount;
            console.log('Next state of reviews count:', state.reviewCount);
        }
    }
});

export const { setProductReview, setReviewCount } = productSlice.actions;
export default productSlice;