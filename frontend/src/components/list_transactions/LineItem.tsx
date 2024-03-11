export default function LineItems({
  description,
  price,
  categoria,
  type,
  date,
}: {
  description: string;
  price: number;
  categoria: string;
  type: string;
  date: string;
}) {
  return (
    <tr className="itemListComponent">
      <td>{description}</td>
      <td id={type === "Entrada" ? "vendaId" : "despesaId"}>R$ {price}</td>
      <td>{categoria}</td>
      <td>{date}</td>
    </tr>
  );
}
