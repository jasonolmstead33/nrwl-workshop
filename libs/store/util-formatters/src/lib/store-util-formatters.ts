export function formatRating(rating: number | undefined) {
    if (!!rating) {
        return `${Math.round(rating * 100) / 10} / 10`;
    } else {
        return `0/10`;
    }
    
}