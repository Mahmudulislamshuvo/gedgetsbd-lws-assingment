export default function ManageListLayout({
  children,
  create,
  edit,
  delete: del,
}) {
  return (
    <>
      {children}
      {create}
      {edit}
      {del}
    </>
  );
}
