export const parseAddress = adverts => {
  return adverts.map(ad => {
    const [street, city, country] = ad.address.split(', ');
    return {
      ...ad,
      street,
      city,
      country,
    };
  });
};
