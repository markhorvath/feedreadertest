$(function() {

    describe('RSS Feeds', function() {

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        var feedUrl;
        var feedLength = allFeeds.length;

        it('have URLs and are not empty', function() {
            for (var i = 0; i < feedLength; i++) {
                feedUrl = allFeeds[i].url;
                expect(feedUrl).toBeDefined();
                expect(feedUrl).not.toBe('');
            };
        });

        var feedName;
        var feedLength = allFeeds.length;

        it('have names and are not empty', function() {
            for (var i = 0; i < feedLength; i++) {
                feedName = allFeeds[i].name;
                expect(feedName).toBeDefined();
                expect(feedName).not.toBe('');
            };
        });
    });

    describe('The menu', function() {

        it('is hidden by default', function() {
            expect(document.body.classList).toContain('menu-hidden');
        });

        it('changes visibility when clicked', function() {
            $('.menu-icon-link').trigger("click");
            var bodyClass = document.body.classList;
            expect(bodyClass).not.toContain("menu-hidden");
            $('.menu-icon-link').trigger("click");
            var bodyClass = document.body.classList;
            expect(bodyClass).toContain("menu-hidden");
        });
    });

    describe('Initial Entries', function() {

        beforeEach(function(done) {
            loadFeed(0, done);
        });

        it("contains at least one .entry element", function() {
            var findEntry = $('.feed .entry');
            var check = findEntry.hasClass('entry');
            expect(check).toBe(true);
        });

    });

    describe('New Feed Selection', function() {
        var feed;

        beforeEach(function(done) {
            loadFeed(1, function() {
                feed = $('.feed').html();
                done();
            });
        });

        it("content changes when a new feed is loaded", function(done) {
            loadFeed(0, function() {
                expect(feed).not.toEqual($('.feed').html());
                done();
            })
        });

    });

}());