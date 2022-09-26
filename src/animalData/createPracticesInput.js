export const createInput = (
  id,
  street,
  city,
  postal,
  employes,
  number,
  patients,
) => {
  let obj = {
    id: `${id}`,
    adress: {
      street: `${street}`,
      city: `${city}`,
      postal_code: `${postal}`,
    },
    patienten: patients,
    employes: { employes, number },
  };
  return obj;
};
