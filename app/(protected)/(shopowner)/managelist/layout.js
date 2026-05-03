export default function ManageListLayout({ children, create, edit }) {
  return (
    <>
      {children}
      {create}
      {edit}
    </>
  );
}
