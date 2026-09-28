"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import CategoryFilters from "@/components/CategoryFilters";
import EmptyState from "@/components/EmptyState";
import LoadingSpinner from "@/components/LoadingSpinner";
import Navbar from "@/components/Navbar";
import PropertyGrid from "@/components/PropertyGrid";
import { categories } from "@/data/categories";
import { rooms } from "@/data/rooms";
import type { Property } from "@/types/property";

const Home = () => {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [properties, setProperties] = useState<Property[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProperties(rooms);
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const normalizedQuery = query.trim().toLowerCase();
  const filteredProperties = properties.filter((property) => {
    const matchesCategory = activeCategory === "all" || property.category === activeCategory;
    const searchableText = `${property.title} ${property.location}`.toLowerCase();
    return matchesCategory && searchableText.includes(normalizedQuery);
  });

  return (
    <>
      <Navbar query={query} onQueryChange={setQuery} />
      <CategoryFilters activeCategory={activeCategory} categories={categories} onCategoryChange={setActiveCategory} />
      <main className="mx-auto max-w-7xl px-4 py-6">
        {isLoading ? <LoadingSpinner /> : filteredProperties.length > 0 ? <PropertyGrid properties={filteredProperties} /> : <EmptyState query={query} />}
        <div className="py-8 text-center">
          <Link className="text-sm font-semibold text-neutral-900 underline underline-offset-4" href="/catalog">
            Ver todos los alojamientos
          </Link>
        </div>
      </main>
    </>
  );
};

export default Home;
