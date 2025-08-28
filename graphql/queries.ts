import { gql } from "@apollo/client";

// Page 1 – All brands
export const FIND_ALL_BRANDS = gql`
  query FindAllBrands {
    findAllBrands {
      id
      name
      origin
      image
      categories
    }
  }
`;

// Page 2 – Models for a brand (sorted)
export const FIND_BRAND_MODELS = gql`
  query FindBrandModels($brandId: ID!, $sort: sortBy!) {
    findBrandModels(id: $brandId, sortBy: $sort) {
      id
      name
      type
      image
      price
    }
  }
`;

// Page 2 – Search models within a brand
export const SEARCH_MODELS = gql`
  query SearchModels($brandId: String!, $name: String!) {
    searchModels(brandId: $brandId, name: $name) {
      id
      name
      type
      image
      price
    }
  }
`;

// Page 3 – Single model details
export const FIND_UNIQUE_MODEL = gql`
  query FindUniqueModel($brandId: ID!, $modelId: ID!) {
    findUniqueModel(brandId: $brandId, modelId: $modelId) {
      id
      name
      description
      image
      price
      type
      specs {
        bodyWood
        neckWood
        fingerboardWood
        pickups
        tuners
        scaleLength
        bridge
      }
      musicians {
        name
        musicianImage
        bands
      }
    }
  }
`;

export const FIND_UNIQUE_BRAND = gql`
  query FindUniqueBrand($id: ID!) {
    findUniqueBrand(id: $id) {
      id
      name
      image
      origin
    }
  }
`;
