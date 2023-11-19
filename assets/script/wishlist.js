var orders = JSON.parse(localStorage.getItem('orders')) || [];
const orderTBody = $("tbody");
orderTBody.empty();

function populateTable() 
{
    $.each(orders, function(index, order)
    {
        const newHTMLRow = `<tr>
        <td>${order.fullName}</td>
        <td>${order.email}</td>
        <td>${order.article}</td>
        <td>${order.num}</td>
        <td>${order.price}</td>
        <td>${order.desc}</td></tr>`;

        orderTBody.append(newHTMLRow);
    });
}
populateTable();