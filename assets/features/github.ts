const query = `
query($userName:String!) {
  user(login: $userName){
    contributionsCollection {
      contributionCalendar {
        totalContributions
        weeks {
          contributionDays {
            contributionCount
            date
          }
        }
      }
    }
  }
}
`
export async function retrieveContributionData(
  userName: string
): Promise<Externals.Github.ApiResponse> {
  const variables = `
  {
    "userName": "${userName}"
  }
`
  const body = {
    query,
    variables,
  }
  const res = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    },
    body: JSON.stringify(body),
  })
  return res.json()
}

export async function getUsernameById(
  uid: string
): Promise<Externals.Github.ApiResponse> {
  const headers = new Headers()

  headers.set('Authorization', 'Basic ' + btoa('username:$token'))

  const res = await fetch(`https://api.github.com/user/${uid}`)
  return res.json()
}
