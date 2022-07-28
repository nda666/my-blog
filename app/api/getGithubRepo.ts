export default async function getGithubRepo() {
  try {
    const respose = await fetch(
      `https://api.github.com/users/${process.env.GITHUB_USERNAME}/repos`
    );

    if (respose.ok) {
      return await respose.json();
    }
  } catch (error) {
    throw error;
  }
}
