import { UniqueIdService } from './unique-id.service';

describe(UniqueIdService.name, () => {
  let service: UniqueIdService = null;
  beforeEach(() => {
    service = new UniqueIdService();
  })

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should generate id when called with prefix`, () => {

    const id = service.generateUniqueIdWithPrefix('app');
    expect(id.startsWith('app-')).toBeTrue();
  })

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should not generate duplicated IDs when called multiple times`, () => {
    const ids = new Set();

    for (let i = 0; i < 50; i++) {
      ids.add(service.generateUniqueIdWithPrefix('app'));
    }
    expect(ids.size).toBe(50);
  })

  it(`#${UniqueIdService.prototype.getNumberOfGeneratedIds.name} should return the number of generatedIds when called`, () => {
    service.generateUniqueIdWithPrefix('app');
    service.generateUniqueIdWithPrefix('app');
    expect(service.getNumberOfGeneratedIds()).toBe(2);
  })

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should throw error when called with empty`, () => {
    const emptyValues = [null, undefined, '1', ''];

    emptyValues.forEach((value) => {
      expect(() => service.generateUniqueIdWithPrefix(value))
        .withContext(`Empty value: ${value}`).toThrow();
    })
  })
})
