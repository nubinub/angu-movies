import movies from 'src/testing/data/movies-mock';
import { tvShows } from 'src/testing/data/tv-shows-mock';

import { ListService } from './list.service';

describe('Services: ListService', () => {
    let service: ListService;

    beforeEach(() => {
        localStorage.clear();
        service = new ListService('test');
    });

    describe('#getList', () => {
        it('should have an empty list by default', () => {
            expect(service.getList().length).toBe(0);
        });

        it('should init the list with the localStorage value', () => {
            localStorage.setItem('test', JSON.stringify(movies));
            service = new ListService('test');
            expect(service.getList()).toEqual(movies);
        });
    });

    describe('#toggleMedia', () => {
        it('should add the given media to the list and return true', () => {
            const result = service.toggleMedia(movies[0]);
            const list = service.getList();
            expect(list.length).toBe(1);
            expect(list[0]).toEqual(movies[0]);
            expect(result).toBe(true);
        });

        it('should let the list in the same state when called twice with the same item', () => {
            const list = service.getList();
            expect(list.length).toBe(0);
            service.toggleMedia(movies[0]);
            service.toggleMedia(movies[0]);
            expect(list.length).toBe(0);
        });

        it('should remove a media from the list if already in it and returns false', () => {
            (service as any).list = [movies[0]];
            const result = service.toggleMedia(movies[0]);
            expect(service.getList()).not.toContain(movies[0]);
            expect(result).toBe(false);
        });
    });

    describe('#hasMedia', () => {
        it('should return true if the given movie is in the list', () => {
            (service as any).list = [...movies];
            expect(service.hasMedia(movies[3])).toBeTrue();
        });

        it('should return false if the given movie is not in the list', () => {
            (service as any).list = movies.slice(1);
            expect(service.hasMedia(movies[0])).toBeFalse();
        });

        it('should return false if a twShow with the same id is in the list when given a movie', () => {
            const tvShow = {...tvShows[0]};
            tvShow.id = movies[0].id;
            (service as any).list = [tvShow];
            expect(service.hasMedia(movies[0])).toBeFalse();
        });

        it('should return false if a movie with the same id is in the list when given a tvShow', () => {
            const tvShow = {...tvShows[0]};
            tvShow.id = movies[0].id;
            (service as any).list = [movies[0]];
            expect(service.hasMedia(tvShow)).toBeFalse();
        });
    });
});
