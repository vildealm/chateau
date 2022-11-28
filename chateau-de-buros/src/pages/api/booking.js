import sanityClient from "../../client";

export default async function handler(req, res) {
  console.log("MEMEMEM#")
  switch (req.method) {
    case "POST":
      console.log("HEYEYE")
      const newBooking = await JSON.parse(req.body);
      try {
        await sanityClient
          .create({
            _type: "test",
            firstname: newBooking.firstname,
            lastname: newBooking.lastname,
          })
          .then((res) => {
            console.log(`Booking was created, document ID is ${res._id}`);
          });
        res
          .status(200)
          .json({ msg: `Booking was created, document ID is ${res._id}` });
      } catch (err) {
        console.error(err);
        res.status(500).json({ msg: "Error, check console" });
      }
    break;
    default:
        throw new Error('Unknown step');
  }

}