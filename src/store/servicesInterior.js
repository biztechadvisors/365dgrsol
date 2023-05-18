import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const interiorApi = createApi({
  reducerPath: "interiorApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://biztekminds.com/" }),
  endpoints: (builder) => ({
    //* Get Categories
    getKitchen: builder.query({
      query: () => `/mycoolapp/Kitchen`,
    }),

    getBalcony: builder.query({
      query: () => `/mycoolapp/Balcony`,
    }),

    getWardrobe: builder.query({
      query: () => `/mycoolapp/Wardrobe`,
    }),

    //* Get Crockery
    getCrockery: builder.query({
      query: () => `/mycoolapp/Crockery`,
    }),

    getFurniture: builder.query({
      query: () => `/mycoolapp/Furniture`,
    }),

    getTvUnits: builder.query({
      query: () => `/mycoolapp/TVUnits`,
    }),

    getFalseCeiling: builder.query({
      query: () => `/mycoolapp/FalseCeilingDesigns`,
    }),

    getFoyerDesigns: builder.query({
      query: () => `/mycoolapp/Foyer`,
    }),

    getFlooringDesigns: builder.query({
      query: () => `/mycoolapp/FlooringDesigns`,
    }),

    getTileDesigns: builder.query({
      query: () => `/mycoolapp/TileDesigns`,
    }),

    getDiningRoom: builder.query({
      query: () => `/mycoolapp/DiningRoom`,
    }),

    getStudyTables: builder.query({
      query: () => `/mycoolapp/StudyTables`,
    }),

    getWallPaintDesigns: builder.query({
      query: () => `/mycoolapp/WallPaintDesigns`,
    }),
    getWallpaperDesigns: builder.query({
      query: () => `/mycoolapp/WallpaperDesigns`,
    }),
    getWallDecorIdeas: builder.query({
      query: () => `/mycoolapp/WallDecorIdeas`,
    }),

    getBathroom: builder.query({
      query: () => `/mycoolapp/Bathroom`,
    }),

    getHomeOffice: builder.query({
      query: () => `/mycoolapp/HomeOffice`,
    }),

    getGuestBedroom: builder.query({
      query: () => `/mycoolapp/GuestBedroom`,
    }),

    getKidsBedroom: builder.query({
      query: () => `/mycoolapp/KidsBedroom`,
    }),

    getLivingRoom: builder.query({
      query: () => `/mycoolapp/LivingRoom`,
    }),

    getMasterBedroom: builder.query({
      query: () => `/mycoolapp/MasterBedroom`,
    }),

    getPoojaRoom: builder.query({
      query: () => `/mycoolapp/PoojaRoom`,
    }),

    getWindowDesigns: builder.query({
      query: () => `/mycoolapp/WindowDesigns`,
    }),
  }),
});

export const {
  useGetKitchenQuery,

  useGetCrockeryQuery,

  useGetFurnitureQuery,

  useGetFalseCeilingQuery,

  useGetFoyerDesignsQuery,

  useGetStudyTablesQuery,

  useGetTvUnitsQuery,

  useGetBalconyQuery,

  useGetBathroomQuery,

  useGetDiningRoomQuery,

  useGetFlooringDesignsQuery,

  useGetGuestBedroomQuery,

  useGetHomeOfficeQuery,

  useGetKidsBedroomQuery,

  useGetLivingRoomQuery,

  useGetMasterBedroomQuery,

  useGetPoojaRoomQuery,

  useGetTileDesignsQuery,

  useGetWallDecorIdeasQuery,

  useGetWallPaintDesignsQuery,

  useGetWallpaperDesignsQuery,

  useGetWardrobeQuery,

  useGetWindowDesignsQuery,
} = interiorApi;
