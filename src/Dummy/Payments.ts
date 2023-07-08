import Images from '../Constants/Images';

const PaymentsDummyData = [
  {
    title: 'PayPal',
    image: Images.payments.paypal,
    connected: true,
  },
  {
    title: 'Google Pay',
    image: Images.payments.google,
    connected: true,
  },
  {
    title: 'Apple Pay',
    image: Images.payments.apple,
    connected: true,
  },
  {
    title: 'Master Card',
    image: Images.payments.master,
    connected: false,
  },
];
export default PaymentsDummyData;
