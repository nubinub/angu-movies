import { TestBed } from '@angular/core/testing';
import movies from 'src/testing/mock/movies-mock';

import { ListService } from './list.service';

describe('ListService', () => {
    let service: ListService;

    beforeEach(() => {
        localStorage.clear();
        service = new ListService('test');
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    describe('getList', () => {
        it('should have an empty list by default', () => {
            expect(service.getList().length).toBe(0);
        });
    });

    describe('toggleMedia', () => {
        it('should add the given media to the list', () => {
            service.toggleMedia(movies[0]);
            const list = service.getList();
            expect(list.length).toBe(1);
            expect(list[0]).toEqual(movies[0]);
        });

        it('should let the list in the same state when called twice with the same item', () => {
            const list = service.getList();
            expect(list.length).toBe(0);
            service.toggleMedia(movies[0]);
            service.toggleMedia(movies[0]);
            expect(list.length).toBe(0);
        });

        it('should remove a media from the list if already in it', () => {
            (service as any).list = [movies[0]];
            service.toggleMedia(movies[0]);
            expect(service.getList()).not.toContain(movies[0]);
        });
    });

    describe('hasMedia', () => {
        it('should return true if the given movie is in the list', () => {
            (service as any).list = [...movies];
            expect(service.hasMedia(movies[3])).toBeTrue();
        });

        it('should return false if the given movie is not in the list', () => {
            (service as any).list = movies.slice(1);
            expect(service.hasMedia(movies[0])).toBeFalse();
        });
    });
});
