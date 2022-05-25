import './StatusForOrder.css'
import editIcon from '../../img/OrderStatus/editOrder.svg';
import deleteIcon from '../../img/OrderStatus/deleteOrder.svg';
import deliveredIcon from '../../img/OrderStatus/deliveredOrder.svg';
import canceledStatus from '../../img/OrderStatus/canceled.svg';
import preparingStatus from '../../img/OrderStatus/preparing.svg';
import deliveredStatus from '../../img/OrderStatus/delivered.svg';
import readyStatus from '../../img/OrderStatus/readyToServe.svg';

export default function Orders() {

  return (
    <div className="container-status-orders">
        <section className="orders">
            <section className="container-header">
                <div className='header-orders'>
                    <h1>Order Satus</h1>
                    <button>All Orders</button>
                </div>
                <div className="header-tab">
                    <p>Status</p>
                    <p>Num. order</p>
                    <p>Mesa</p>
                </div>
            </section>
            <section className='all-orders'>
            <div className="pending">
                <img src={preparingStatus} alt='edit-icon'/>
                <h2>Orden 1</h2>
                <p>Table 1</p>
                <button><img src={editIcon} alt='edit-icon'/></button>
                <button><img src={deleteIcon} alt='edit-icon'/></button>
                <button><img src={deliveredIcon} alt='edit-icon'/></button>
            </div>
            <div className="pending">
                <img src={readyStatus} alt='edit-icon'/>
                <h2>Orden 3</h2>
                <p>Table 2</p>
                <button><img src={editIcon} alt='edit-icon'/></button>
                <button><img src={deleteIcon} alt='edit-icon'/></button>
                <button><img src={deliveredIcon} alt='edit-icon'/></button>
            </div>
            <div className="pending">
                <img src={deliveredStatus} alt='edit-icon'/>
                <h2>Orden 3</h2>
                <p>Table 3</p>
                <button><img src={editIcon} alt='edit-icon'/></button>
                <button><img src={deleteIcon} alt='edit-icon'/></button>
                <button><img src={deliveredIcon} alt='edit-icon'/></button>
            </div>
            <div className="pending">
                <img src={canceledStatus} alt='edit-icon'/>
                <h2>Orden 1</h2>
                <p>Table 1</p>
                <button><img src={editIcon} alt='edit-icon'/></button>
                <button><img src={deleteIcon} alt='edit-icon'/></button>
                <button><img src={deliveredIcon} alt='edit-icon'/></button>
            </div>
            <div className="pending">
                <img src={preparingStatus} alt='edit-icon'/>
                <h2>Orden 1</h2>
                <p>Table 1</p>
                <button><img src={editIcon} alt='edit-icon'/></button>
                <button><img src={deleteIcon} alt='edit-icon'/></button>
                <button><img src={deliveredIcon} alt='edit-icon'/></button>
            </div>
            </section>
        </section>
    </div>
  );
}

