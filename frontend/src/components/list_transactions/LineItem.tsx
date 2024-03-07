export default function LineItems({ name, price, type, date }) {
    return (
        <tr>
            <td>{name}</td>
            <td>{price}</td>
            <td>{type}</td>
            <td>{date}</td>
        </tr>
    )
}