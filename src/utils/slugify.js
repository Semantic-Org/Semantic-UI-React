import slug from 'slug';

/**
 * Slugifies a string for use in a URL
 * @param  {string} str A string to slugify
 * @return {string} A url-safe lowercase string
 */
export default function slugify(str) {
  return slug(str, {lower: true});
}
