const currentDayDate = new Date();
currentDayDate.setHours(0,0,0,0);

export default {
    name: 'absence',
        type: 'document',
        title: 'Fravær',
        fields: [
        {
            name: 'start',
            type: 'datetime',
            title: 'Startdato',
            options: {
                timeFormat: '00:00',
            },
            validation: Rule => Rule.required().min(currentDayDate).max(Rule.valueOfField('end'))

        },
        {
            name: 'end',
            type: 'datetime',
            title: 'Sluttdato',
            options: {
                timeFormat: '00:00',
            },
            validation: Rule => Rule.required().min(Rule.valueOfField('start'))
        }
    ]
}