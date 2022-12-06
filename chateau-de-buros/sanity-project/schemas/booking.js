export default {
    name: 'booking',
    type: 'document',
    title: 'Booking',
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
      {
        name: 'guests',
        type: 'number',
        title: 'Guests'
      },
      {
        name: 'room',
        type: 'number',
        title: 'Room'
      },
      {
        name: 'type',
        type: 'string',
        title: 'Type'
      },
      {
        name: 'food',
        type: 'string',
        title: 'Food Orderings'
      },
    ]
  }