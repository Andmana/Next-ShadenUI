import { generateUUIDLike } from "@/lib/utils";
import { categories } from "./categories";

export const articles = [
  {
    id: "f8e7d6c5-b4a3-4210-9876-543210abcdef",
    categoryId: "a1b2c3d4-e5f6-4789-8901-23456789abcd",
    title: "Exploring the Mysteries of Quantum Entanglement",
    content:
      "Quantum entanglement is one of the most perplexing and fascinating phenomena in quantum mechanics. It describes a situation where two or more particles become linked together in such a way that they share the same fate, no matter how far apart they are. Measuring a property of one particle instantaneously influences the corresponding property of the other, a concept that Einstein famously called 'spooky action at a distance'. Scientists are actively exploring the potential applications of entanglement in quantum computing, quantum cryptography, and quantum teleportation. Understanding and harnessing this bizarre connection could revolutionize various technological fields. Further research into the fundamental nature of entanglement promises to unlock deeper insights into the fabric of reality itself, bridging the gap between classical intuition and the counter-intuitive world of quantum physics. The implications for our understanding of space, time, and information are profound, making it a central topic in modern physics.",
    imageUrl: null,
    createdAt: "2025-05-13T10:00:00.000Z",
    category: {
      id: "a1b2c3d4-e5f6-4789-8901-23456789abcd",
      name: "Science",
      createdAt: "2025-05-12T18:30:00.000Z",
    },
    user: {
      username: "Leonardo Watch",
    },
  },
  {
    id: "e9d8c7b6-a5f4-4321-8765-43210fedcba98",
    categoryId: "a1b2c3d4-e5f6-4789-8901-23456789abcd",
    title: "The Latest Breakthroughs in Exoplanet Research",
    content:
      "The search for planets beyond our solar system, known as exoplanets, has exploded in recent decades. With advancements in telescope technology and detection methods, astronomers are discovering thousands of these distant worlds, ranging from gas giants larger than Jupiter to rocky planets potentially similar to Earth. Recent breakthroughs include the identification of exoplanets within the habitable zones of their stars, where liquid water could exist on their surfaces, raising the tantalizing possibility of extraterrestrial life. Scientists are also developing sophisticated techniques to analyze the atmospheres of these exoplanets, searching for biosignatures – chemical compounds that could indicate the presence of living organisms. The James Webb Space Telescope is playing a crucial role in this endeavor, providing unprecedented views and data on these far-off worlds. Understanding the diversity and characteristics of exoplanets is not only expanding our knowledge of planetary formation and evolution but also fueling our quest to answer the fundamental question: are we alone in the universe?",
    imageUrl: null,
    createdAt: "2025-05-13T11:30:00.000Z",
    category: {
      id: "a1b2c3d4-e5f6-4789-8901-23456789abcd",
      name: "Science",
      createdAt: "2025-05-12T18:30:00.000Z",
    },
    user: {
      username: "Leonardo Watch",
    },
  },
  {
    id: "d0c9b8a7-96e5-4432-7654-210fedcba9876",
    categoryId: "a1b2c3d4-e5f6-4789-8901-23456789abcd",
    title: "The Ethical Implications of Gene Editing Technologies",
    content:
      "The advent of powerful gene editing technologies, such as CRISPR-Cas9, has opened up unprecedented possibilities for manipulating the building blocks of life. While these tools hold immense promise for treating genetic diseases and advancing our understanding of biology, they also raise profound ethical concerns. Questions surrounding the safety and long-term effects of gene editing, particularly in human embryos, are at the forefront of public debate. The potential for unintended consequences, the equitable access to these technologies, and the societal implications of altering the human genome are critical issues that need careful consideration. Scientists, ethicists, and policymakers are grappling with establishing responsible guidelines and regulations to ensure that these powerful tools are used ethically and for the benefit of humanity, while mitigating potential risks and unintended societal impacts. The discussion encompasses a wide range of perspectives, reflecting the complex interplay between scientific progress and societal values.",
    imageUrl: null,
    createdAt: "2025-05-13T13:00:00.000Z",
    category: {
      id: "a1b2c3d4-e5f6-4789-8901-23456789abcd",
      name: "Science",
      createdAt: "2025-05-12T18:30:00.000Z",
    },
    user: {
      username: "Leonardo Watch",
    },
  },
  {
    id: "c1b0a998-87d4-4543-6543-210fedcba98765",
    categoryId: "a1b2c3d4-e5f6-4789-8901-23456789abcd",
    title: "The Science Behind Climate Change and its Impacts",
    content:
      "Climate change, driven primarily by human activities such as the burning of fossil fuels, is causing significant and widespread changes to Earth's climate system. Scientific evidence overwhelmingly indicates a warming trend, leading to rising global temperatures, melting glaciers and ice sheets, and alterations in precipitation patterns. These changes have profound impacts on ecosystems, agriculture, water resources, and human societies. The science behind climate change involves complex interactions within the atmosphere, oceans, and land, studied through sophisticated climate models and observational data. Understanding the mechanisms and consequences of climate change is crucial for developing effective mitigation and adaptation strategies to address this global challenge. Research continues to refine our understanding of climate sensitivity, feedback loops, and the potential for abrupt climate shifts, emphasizing the urgency of addressing greenhouse gas emissions.",
    imageUrl: null,
    createdAt: "2025-05-14T02:30:00.000Z",
    category: {
      id: "a1b2c3d4-e5f6-4789-8901-23456789abcd",
      name: "Science",
      createdAt: "2025-05-12T18:30:00.000Z",
    },
    user: {
      username: "Leonardo Watch",
    },
  },
  {
    id: "b2a19887-76c3-4654-5432-10fedcba987654",
    categoryId: "a1b2c3d4-e5f6-4789-8901-23456789abcd",
    title: "The Fascinating World of Neuroscience: Exploring the Human Brain",
    content:
      "Neuroscience is the interdisciplinary study of the nervous system, including the brain, spinal cord, and peripheral nerves. It seeks to understand the biological basis of behavior, cognition, emotions, and consciousness. Advances in neuroscience are providing unprecedented insights into how the human brain functions at various levels, from the molecular and cellular mechanisms to the complex neural circuits that underlie our thoughts and actions. Techniques such as brain imaging (fMRI, EEG), genetic analysis, and computational modeling are crucial tools in this research. Understanding the intricacies of the brain holds the key to developing treatments for neurological and psychiatric disorders, as well as enhancing our understanding of learning, memory, and decision-making. Ongoing research in areas like neuroplasticity, the brain's ability to change and adapt, and the connectome, the comprehensive map of neural connections, promises to further revolutionize our knowledge of this most complex organ.",
    imageUrl: null,
    createdAt: "2025-05-14T04:00:00.000Z",
    category: {
      id: "a1b2c3d4-e5f6-4789-8901-23456789abcd",
      name: "Science",
      createdAt: "2025-05-12T18:30:00.000Z",
    },
    user: {
      username: "Leonardo Watch",
    },
  },
  {
    id: "98765432-10fe-4dcba-9876-543210fedcba9",
    categoryId: "bcdefa01-2345-4678-90ab-cdef01234567",
    title: "Exploring the Hidden Gems of Southeast Asia",
    content:
      "Beyond the popular tourist destinations, Southeast Asia is brimming with hidden gems waiting to be discovered. From the tranquil beaches of the Perhentian Islands in Malaysia to the ancient temples of Bagan in Myanmar and the lush rice terraces of Sapa in Vietnam, this region offers a wealth of unique and unforgettable travel experiences. Venture off the beaten path and immerse yourself in the local cultures, savor the diverse and flavorful cuisines, and marvel at the breathtaking natural landscapes. Discover the charm of sleepy fishing villages, trek through verdant jungles, and witness the vibrant traditions that make Southeast Asia so captivating. This article highlights some of the lesser-known but equally enchanting destinations that promise an authentic and enriching travel adventure.",
    imageUrl: null,
    createdAt: "2025-05-14T08:00:00.000Z",
    category: {
      id: "bcdefa01-2345-4678-90ab-cdef01234567",
      name: "Travel",
      createdAt: "2025-05-12T18:30:00.000Z",
    },
    user: {
      username: "Leonardo Watch",
    },
  },
  {
    id: "87654321-0fed-4cba9-8765-43210fedcba98",
    categoryId: "bcdefa01-2345-4678-90ab-cdef01234567",
    title: "A Guide to Backpacking Through South America",
    content:
      "South America is a continent of incredible diversity, offering a vast array of landscapes, cultures, and adventures for the intrepid backpacker. From the towering peaks of the Andes and the lush Amazon rainforest to the vibrant cities of Buenos Aires and Rio de Janeiro, there's something for every traveler. This guide provides essential tips for planning your backpacking trip, including advice on transportation, accommodation, budget, and must-see destinations. Explore ancient Incan ruins, hike through Patagonia's stunning national parks, experience the energy of Carnival, and immerse yourself in the rich history and traditions of this captivating continent. Prepare for an unforgettable journey filled with breathtaking scenery, warm hospitality, and life-changing experiences.",
    imageUrl: null,
    createdAt: "2025-05-14T09:30:00.000Z",
    category: {
      id: "bcdefa01-2345-4678-90ab-cdef01234567",
      name: "Travel",
      createdAt: "2025-05-12T18:30:00.000Z",
    },
    user: {
      username: "Leonardo Watch",
    },
  },
  {
    id: "76543210-fedc-4ba98-7654-3210fedcba987",
    categoryId: "bcdefa01-2345-4678-90ab-cdef01234567",
    title: "The Magic of Solo Travel: Discovering Yourself on the Road",
    content:
      "Embarking on a solo travel adventure can be a transformative experience, offering a unique opportunity for self-discovery and personal growth. Without the constraints of group travel, you have the freedom to set your own pace, follow your own interests, and connect with new people on your own terms. This article explores the magic of solo travel, highlighting the benefits of independence, the opportunities for introspection, and the empowering feeling of navigating unfamiliar territories on your own. Whether you're exploring bustling cities or remote natural landscapes, solo travel can lead to unexpected encounters, newfound confidence, and a deeper understanding of yourself and the world around you. Embrace the unknown and discover the incredible journey that awaits when you venture out on your own.",
    imageUrl: null,
    createdAt: "2025-05-14T11:00:00.000Z",
    category: {
      id: "bcdefa01-2345-4678-90ab-cdef01234567",
      name: "Travel",
      createdAt: "2025-05-12T18:30:00.000Z",
    },
    user: {
      username: "Leonardo Watch",
    },
  },
  {
    id: "6543210f-edcb-4a987-6543-210fedcba9876",
    categoryId: "cdefab12-3456-4567-abcd-ef0123456789",
    title: "A Culinary Journey Through the Flavors of Italy",
    content:
      "Italian cuisine is renowned worldwide for its simplicity, fresh ingredients, and regional diversity. From the creamy risotto of the north to the spicy pasta dishes of the south, each region boasts its own unique culinary traditions. This article takes you on a gastronomic journey through Italy, exploring iconic dishes like pasta carbonara, Neapolitan pizza, Tuscan steak, and Sicilian cannoli. Discover the secrets behind these classic recipes, learn about the importance of local and seasonal ingredients, and immerse yourself in the rich culinary heritage that makes Italian food so beloved. Whether you're a seasoned foodie or simply appreciate a good meal, prepare your taste buds for an unforgettable exploration of Italy's delectable offerings.",
    imageUrl: null,
    createdAt: "2025-05-14T14:30:00.000Z",
    category: {
      id: "cdefab12-3456-4567-abcd-ef0123456789",
      name: "Food",
      createdAt: "2025-05-12T18:30:00.000Z",
    },
    user: {
      username: "Leonardo Watch",
    },
  },
  {
    id: "543210fe-dcba-4b876-5432-10fedcba98765",
    categoryId: "cdefab12-3456-4567-abcd-ef0123456789",
    title: "The Art of Baking: Mastering the Fundamentals",
    content:
      "Baking is a science and an art, requiring precision and a touch of creativity. This article delves into the fundamentals of baking, covering essential techniques such as kneading dough, whipping egg whites, and understanding the role of different ingredients like flour, sugar, and leavening agents. Whether you aspire to bake crusty bread, delicate pastries, or decadent cakes, mastering these foundational skills is key to success. Explore different types of flour and their properties, learn how to achieve the perfect rise, and discover tips for troubleshooting common baking challenges. Embark on a rewarding journey of transforming simple ingredients into delicious and satisfying creations.",
    imageUrl: null,
    createdAt: "2025-05-14T16:00:00.000Z",
    category: {
      id: "cdefab12-3456-4567-abcd-ef0123456789",
      name: "Food",
      createdAt: "2025-05-12T18:30:00.000Z",
    },
    user: {
      username: "Leonardo Watch",
    },
  },
  {
    id: "43210fed-cba9-4c765-4321-0fedcba987654",
    categoryId: "cdefab12-3456-4567-abcd-ef0123456789",
    title: "Exploring the Vibrant World of Street Food",
    content:
      "Street food is a global phenomenon, offering a delicious and affordable way to experience the local flavors and culture of a place. From the bustling night markets of Bangkok to the taco stands of Mexico City and the food carts of New York, street food vendors serve up a diverse array of mouthwatering dishes. This article celebrates the vibrant world of street food, highlighting some of the most iconic and must-try snacks and meals from around the globe. Discover the stories behind these culinary traditions, learn about the unique ingredients and preparation methods, and embark on a flavorful adventure that will tantalize your taste buds and immerse you in the local street food scene.",
    imageUrl: null,
    createdAt: "2025-05-14T17:30:00.000Z",
    category: {
      id: "cdefab12-3456-4567-abcd-ef0123456789",
      name: "Food",
      createdAt: "2025-05-12T18:30:00.000Z",
    },
    user: {
      username: "Leonardo Watch",
    },
  },
  {
    id: "3210fedc-ba98-4d654-3210-fedcba9876543",
    categoryId: "defabc23-4567-4456-bcde-f0123456789a",
    title: "The Enduring Legacy of Ancient Egyptian Culture",
    content:
      "Ancient Egyptian culture, with its magnificent pyramids, intricate hieroglyphs, and powerful pharaohs, has captivated the world for centuries. This article explores the enduring legacy of this remarkable civilization, delving into its religious beliefs, social structures, artistic achievements, and scientific advancements. Discover the mysteries of mummification, the significance of the Nile River, and the grandeur of temples like Karnak and Luxor. Unravel the secrets of their writing system and the profound impact their innovations had on mathematics, astronomy, and medicine. The echoes of ancient Egypt continue to resonate in our modern world, a testament to the ingenuity and sophistication of this extraordinary culture.",
    imageUrl: null,
    createdAt: "2025-05-14T21:00:00.000Z",
    category: {
      id: "defabc23-4567-4456-bcde-f0123456789a",
      name: "Culture",
      createdAt: "2025-05-12T18:30:00.000Z",
    },
    user: {
      username: "Leonardo Watch",
    },
  },
  {
    id: "210fedcb-a987-4e543-210f-edcba98765432",
    categoryId: "defabc23-4567-4456-bcde-f0123456789a",
    title: "The Rich Tapestry of Japanese Traditional Arts",
    content:
      "Japanese culture is rich in traditional arts that have been refined over centuries, reflecting a deep appreciation for aesthetics, nature, and mindfulness. This article explores the intricate world of Noh and Kabuki theater, the elegance of the tea ceremony (Chanoyu), the delicate beauty of calligraphy (Shodo) and flower arrangement (Ikebana), and the skill involved in traditional crafts like ceramics and lacquerware. Discover the historical and philosophical underpinnings of these art forms, and appreciate the dedication and artistry of the practitioners who keep these traditions alive. From the serene rituals to the dynamic performances, Japanese traditional arts offer a profound insight into the country's cultural identity.",
    imageUrl: null,
    createdAt: "2025-05-14T22:30:00.000Z",
    category: {
      id: "defabc23-4567-4456-bcde-f0123456789a",
      name: "Culture",
      createdAt: "2025-05-12T18:30:00.000Z",
    },
    user: {
      username: "Leonardo Watch",
    },
  },
  {
    id: "10fedcba-9876-4f432-10fe-dcba987654321",
    categoryId: "defabc23-4567-4456-bcde-f0123456789a",
    title:
      "Understanding the Diversity of Indigenous Cultures Around the World",
    content:
      "Indigenous cultures represent a vast and diverse array of traditions, languages, and ways of life, holding invaluable knowledge about their environments and histories. This article highlights the importance of understanding and respecting the unique cultural heritage of indigenous peoples across the globe. From the ancestral lands of Native Americans to the vibrant customs of Aboriginal Australians and the rich traditions of tribes in the Amazon rainforest, each culture offers a unique perspective on humanity's relationship with the natural world. Recognizing and supporting the rights and cultural preservation of indigenous communities is crucial for safeguarding this invaluable heritage for future generations and fostering a more inclusive and understanding world.",
    imageUrl: null,
    createdAt: "2025-05-15T00:00:00.000Z",
    category: {
      id: "defabc23-4567-4456-bcde-f0123456789a",
      name: "Culture",
      createdAt: "2025-05-12T18:30:00.000Z",
    },
  },
];

export const getArticleById = (id) => {
  return articles.find((article) => (article.id = id));
};

export function getArticles(
  title = null,
  categoryId = null,
  page = 1,
  limit = 9
) {
  const filteredArticles = articles.filter((article) => {
    let titleMatch = true;
    let categoryIdMatch = true;

    if (title) {
      titleMatch = article.title.toLowerCase().includes(title.toLowerCase());
    }

    if (categoryId) {
      categoryIdMatch = article.categoryId === categoryId;
    }

    return titleMatch && categoryIdMatch;
  });

  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedData = filteredArticles.slice(startIndex, endIndex);

  return {
    data: paginatedData,
    total: filteredArticles.length,
    page: parseInt(page),
    limit: parseInt(limit),
  };
}

export const constructorArticle = (title, categoryId, content) => {
  return {
    id: generateUUIDLike(),
    categoryId: categoryId,
    title: title,
    content: content,
    imageUrl: null,
    createdAt: new Date(),
    category: categories.find((category) => category.id === categoryId),
  };
};
