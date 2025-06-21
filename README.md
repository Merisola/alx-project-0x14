## API Overview

The MoviesDatabase API provides comprehensive, up-to-date information on over 9 million titles, including movies, TV shows, and episodes, as well as details on 11 million actors, crew, and cast members. The data includes trailers (YouTube URLs), awards, full biographies, ratings, and much more. This API is ideal for developers building movie discovery or information apps.

Support the developers here: https://www.buymeacoffee.com/SAdrian13

---

## API Version

Current version: v1.0 (please verify with official docs)

---

## Available Endpoints

- `/titles`  
  Returns an array of movie/series/episode titles based on filters and sorting options.

- `/x/titles-by-ids`  
  Fetches titles by a list of IMDb IDs.

- `/titles/{id}`  
  Returns detailed information for a specific title by IMDb ID.

- `/titles/{id}/ratings`  
  Returns ratings and vote counts for a specific title.

- `/titles/series/{id}`  
  Returns episodes of a series, including episode and season numbers.

- `/titles/seasons/{id}`  
  Returns the number of seasons for a series.

- `/titles/series/{id}/{season}`  
  Returns episodes of a specific season for a series.

- `/titles/episode/{id}`  
  Returns detailed information about a specific episode.

- `/titles/x/upcoming`  
  Returns upcoming movie titles.

- `/titles/search/keyword/{keyword}`  
  Searches titles by keyword.

- `/titles/search/title/{title}`  
  Searches titles by name or part of the title.

- `/titles/search/akas/{aka}`  
  Searches titles by alternate names (exact, case-sensitive).

- `/actors`  
  Returns a list of actors.

- `/actors/{id}`  
  Returns detailed information about an actor by IMDb ID.

- `/title/utils/titleType`  
  Returns a list of title types.

- `/title/utils/genres`  
  Returns a list of genres.

- `/title/utils/lists`  
  Returns predefined lists for querying titles.

---

## Request and Response Format

- All endpoints return JSON objects containing a `results` key with the data array.  
- Paginated endpoints also include `page`, `next`, and `entries` keys for navigation.

### Example Request

