import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "13j3hr4a", // find this at manage.sanity.io or in your sanity.json
  dataset: "booking", // this is from those question during 'sanity init'
  token: "ska4hXCj7ILCz9X6KhjzLdhGXRpHtookeGTKI5P81PIKGru884LAgrMcGSGBZz9nExlUD7xJA7qvE8z3CYmrj6pvVev3fCwSJg3ATiFiTxRRd2Szjfb1QFMoFA8CCliM9TAWSoqRrQRC1a343kyUdNflgkNIrF5BOfpnd092TEsau7zzDvtc",
  useCdn: "false"
});