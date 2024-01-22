import React from "react";
import Container from "./components/Container";
import EmptyState from "./components/EmptyState";
import { IListingsParams, getListings } from "./actions/getListings";
import getCurrentUser from "./actions/getCurrentUser";
import ListingCard from "./components/listings/ListingCard";
import ClientOnly from "./components/ClientOnly";

interface HomeProps {
  searchParams: IListingsParams;
}

const Home = async ({ searchParams }: HomeProps) => {
  const listings = await getListings(searchParams);
  const currentUser = await getCurrentUser();

  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState showReset />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <Container>
        <div className="pt-32 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6">
          {listings.map((listing: any) => {
            return <ListingCard key={listing.id} data={listing} currentUser={currentUser} />;
          })}
        </div>
      </Container>
    </ClientOnly>
  );
};

export default Home;
