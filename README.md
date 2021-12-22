# SO-USER - short link and user comparisons for Stack Overflow

[![Build](https://github.com/samliew/so-user/actions/workflows/nodejs.yml/badge.svg)](https://github.com/samliew/so-user/actions/workflows/nodejs.yml) ![GitHub](https://img.shields.io/github/license/samliew/so-user?color=blue) ![GitHub commit activity](https://img.shields.io/github/commit-activity/m/samliew/so-user)

For feature requests/suggestions and bug reports, please [create an issue on Github](https://github.com/samliew/so-user/issues).

## Short link redirects

SO-USER provides a short link service that redirects to user profile pages on Stack Overflow.

**Examples:**

`https://so-user.com/1` -> `https://stackoverflow.com/users/1`
`https://so-user.com/current` -> `https://stackoverflow.com/users/current`
`https://so-user.com//preferences/current` -> `https://stackoverflow.com/users/preferences/current`
`https://so-user.com/?tab=moderators` -> `https://stackoverflow.com/users/?tab=moderators`
`https://so-user.com/?tab=reputation&filter=all` -> `https://stackoverflow.com/users?tab=reputation&filter=all`
`https://so-user.com/1` -> `https://stackoverflow.com/users/1`

## User comparison tool

SO-USER does Stack Overflow user comparisons with the URL path format `/compare/<user_id>/<user_id>`.

**Examples of compared data:**

- reputation (total/per year/over time)
- badges (named/tags)
- question stats (total/per year/over time)
- answer stats
- moderation stats (edits/reviews/votes)
- tag stats
- chat stats
- election participation
- meta participation
- other network accounts

## Environment variables

All array-like values must be specified as a pipe-delimited list (i.e. `A|B|C`)

| Variable                       | Type     | Required? | Default      | Description                                                 |
| ------------------------------ | -------- | --------- | ------------ | ----------------------------------------------------------- |
| ``                             | string   | yes       | -            |                                                             |
