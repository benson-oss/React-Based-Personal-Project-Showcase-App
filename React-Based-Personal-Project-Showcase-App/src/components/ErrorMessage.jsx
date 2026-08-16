
export default function ErrorMessage({
  message = "Something went wrong. Please try again.",
}) {
  return (
    <div className="error-message" role="alert" aria-live="assertive">
      <span className="error-message__icon" aria-hidden="true">
        ⚠️
      </span>
      <p>{message}</p>
    </div>
  );
}
