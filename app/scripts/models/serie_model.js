DrNu.Serie = DS.Model.extend({
    "slug": DS.attr('string'),
    "title": DS.attr('string'),
    "description": DS.attr('string'),
    "shortName": DS.attr('string'),
    "newestVideoId": DS.attr('number'),
    "newestVideoPublishTime": DS.attr('date'),
    "videoCount": DS.attr('number'),
    "webCmsImagePath": DS.attr('string')
});

