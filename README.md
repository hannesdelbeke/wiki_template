This template allows you to create a site from your [Obsidian](https://obsidian.md/) notes, without any coding.

## Demo

See this template in action [here](https://hannesdelbeke.github.io/wiki_template/)

the following sites also use this template:
- https://hannesdelbeke.github.io/wiki/
- https://techartorg.github.io/TAO-Wiki/

## Notes

TODO step by step guide on how to setup.
which settings to configure in the config file.
folder layout
branch infrastructure

NOTES:
- if you create a file index.md in a folder, that page will open when clicking on the folder in the side bar.

TODO:
- fork/make from template
- copy your vault notes in notes folder (don't change the foldername)
- token?
- in your notes folder, create a file index.md. This is the first page people see on your website.
- do not make a folder named "assets", or a folder with the same name as your repo e.g. "wiki_templates"

## Features
### Done
- [x] [[wikilinks]]
- [x] backlink support, forked Andy's [note-link-janitor](https://github.com/andymatuschak/note-link-janitor) and added a few fixes
- [x] [obsidian graph](https://hannesdelbeke.github.io/wiki_template/Graph%F0%9F%95%B8%EF%B8%8F/)
- [x] dark/light theme
- [x] every page has a "edit on github" pencil in top right, which links to the page on github
- [x] hashtag
- [x] dynamic content bar
- [x] table of content (page)
- [x] various fancy markdown syntax, e.g. LaTeX, mermaid, etc.
- [x] configure landing page / start page. index.md file in notes

### TODO
- [ ] hashtag search click
- [ ] preview [hover link](https://github.com/ObsidianPublisher/tooltips-internal-link)
- [ ] submodule support for actions **TODO**
- [ ] currently action doesn't work if no image or notes folder
- [ ] handle limitation. do not make a folder in notes with the reponame

### Tech
- we use mkdocs to auto convert markdown files to HTML
- we use github actions to automate the build process.
- any commit to the main branch triggers a copy of the notes from main to mkdocs branch
- any commit in the mkdocs branch triggers a mkdocs build, to auto convert the markdown to html, using the settings in mkdocs.yml
- html output is saved in the gh-pages branch. this is where all the HTML stuff like css files etc live. (right now the build HTML files aren't actually committed)
- the files from the gh-pages branch are then automatically uploaded to github-pages by the github action.

## contribute
TODO local run site instructions.

## license
If you use this template, you need to use the AGPL license for any code involved.
However the AGPL license does not apply to your notes! 
Currently AGPL because some AGPL python hooks were used from [obsidian-mkdocs-publisher-template](https://github.com/ObsidianPublisher/obsidian-mkdocs-publisher-template)
