const apikey = 'O54GZMe08RdJyvSxH9MGOrw0eGxCl5Va84Z-pWQvqih_3CbfEa8Jv-MIXm4zX1XyfryhGX7Xnae3_-CnQXcgBXBpPorXIcZlLNE50Xyec1e6vIYC-qwG5IF_oxMKYHYx';

const Yelp = {
    searchYelp(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${apikey}`
            },
        }).then((response) => {
            return response.json();
        }).then((jsonResponse) => {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map(((business) => {
                    console.log(business);
                    return {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.city,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count,
                    }
                }));
            }
        });
    }
};

export default Yelp;