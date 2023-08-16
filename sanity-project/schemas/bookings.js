export default {
    name: 'bookings',
    type: 'document',
    title: 'Orders',
    fields: [
      {
        name: 'check_in',
        type: 'datetime',
        title: 'Checkin',

      },
      {
        name: 'check_out',
        type: 'datetime',
        title: 'Checkout'
      },
      {
        name: 'firstname',
        type: 'string',
        title: 'First name'
      },
      {
        name: 'lastname',
        type: 'string',
        title: 'Last name'
      },
      {
        name: 'email',
        type: 'string',
        title: 'Email'
      },
      {
        name: 'office',
        type: 'string',
        title: 'Office'
      },
    ]
  }