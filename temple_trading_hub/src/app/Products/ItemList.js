import { useRouter } from 'next/router';

const ItemList = ({ items }) => {
 const router = useRouter();

 const handleItemClick = (id) => {
    router.push(`/app/Products/ProductPage?id=${id}`);
 };

 return (
    <div>
      {items.map((item) => (
        <div key={item.id} onClick={() => handleItemClick(item.id)}>
          <h3>{item.title}</h3>
          {/* Add more item details here */}
        </div>
      ))}
    </div>
 );
};

export default ItemList;

