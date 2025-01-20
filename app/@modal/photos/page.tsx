import Link from "next/link";
import { Modal } from "../(.)photos/[id]/modal";

export default async function Photos() {
  let photos = Array.from({ length: 6 }, (_, i) => i + 1);

  return (
    <Modal>
      <section
        style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
      >
        {photos.map((id) => (
          <div>
            <Link className="" key={id} href={`/photos/${id}`} passHref>
              {id}
            </Link>
          </div>
        ))}
      </section>
    </Modal>
  );
}
