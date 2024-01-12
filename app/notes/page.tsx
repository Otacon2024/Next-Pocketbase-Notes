async function getNotes() {
  // fetch data from a pocketbase url endpoint
  const res = await fetch(
    "http://127.0.0.1:8090/api/collections/notes/records?page=1&perPage=30"
  );

  // convert to json
  const data = await res.json();

  // return the data as an array
  return data?.items as any[];
}

export default async function NotesPage() {
  return (
    <div>
      <h1>Notes</h1>
    </div>
  );
}
