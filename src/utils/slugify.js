import slug from 'slug';

/**
 * Slugifies a string for use in a URL.
 *
 * @param  {string} str A string to slugify
 * @return {string} A url-safe string
 */
export default function slugify(str) {
  return slug(str);
}
