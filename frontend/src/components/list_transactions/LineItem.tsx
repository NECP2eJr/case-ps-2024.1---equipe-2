export default function LineItems({
  description,
  price,
  type,
  date,
}: {
  description: string;
  price: number;
  type: string;
  date: string;
}) {
  return (
    <tr className="itemListComponent">
      <td>{description}</td>
      <td id={type === "Venda" ? "vendaId" : "despesaId"}>R$ {price}</td>
      <td>{type}</td>
      <td>{date}</td>
    </tr>
  );
}
