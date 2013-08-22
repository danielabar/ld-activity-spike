ld-activity-spike
=================

This is a spike for [LEDITA](https://github.com/arpetti/LEDITA).

The purpose is to investigate how to render the Activities for a Learning Design using Angular.

Before going through the work of creating a real service to generate the Activities, this project defines a sample object model in [activity.json](app/data/activity.json). This allows for investigating what is the optimal object model to support the desired html.

## Setup Instructions

* Clone repo

* cd to project root and run ```node web-server.js```

* Open browser url [http://localhost:8000/app/index.html](http://localhost:8000/app/index.html)

## Change Data

* Edit [activity.json](app/data/activity.json) to see how changes in the data may affect the html.

Data was inspired from this [course outline](sample course outline: https://scs.senecac.on.ca/course/hwd101)

* If in doubt about whether changes to the json file are valid, run it through the [linter](http://jsonlint.com/)

## Change Rendering

* Edit [activity-view.html](app/partials/activity-view.html) to create a different view
