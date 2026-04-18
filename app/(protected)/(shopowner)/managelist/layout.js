// app/layout.js
export default function PerallalAndInterceptLayout({ children, create }) {
  return (
    <html>
      <body>
        {children}
        {create}
      </body>
    </html>
  );
}
