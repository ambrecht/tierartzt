export const createInput = (
  id,
  image,
  owner,
  prax,
  animalName,
  art,
  dbo,
  tag,
  vacc,
  last,
  history,
  reports,
) => {
  let obj = {
    id: `${id}`,
    praxis_id: `${prax}`,
    pet_owner_name: `${owner}`,
    pet: {
      species: `${art}`,
      name: `${animalName}`,
      image: `${image}`,
      date_of_birth: `${dbo}`,
      pit_tag: `${tag}`,
      vaccinations: [`${vacc}`],
      medical_history: {
        last_visit: `${last}`,
        prior_illness: `${history}`,
        current_medications: 'none',
        reports: `${reports}`,
      },
    },
  };
  return obj;
};
