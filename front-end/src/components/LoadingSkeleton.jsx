export default function LoadingSkeleton({ count = 8 }) {
  return (
    <div className="skeleton-row">
      {Array.from({ length: count }).map((_, index) => <div className="skeleton-card" key={index} />)}
    </div>
  )
}
