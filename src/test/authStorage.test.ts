import { AuthStorageService } from '../app/core/services/authStorage.service';
import { UserStorageService } from '../app/core/services/userStorage.service';

describe('AuthStorageService', () => {
  let authStorage: AuthStorageService;
  let userStorage: UserStorageService;

  beforeAll(() => {
    const localStorageMock = (() => {
      let store: { [key: string]: string } = {};

      return {
        getItem: (key: string) => store[key] || null,
        setItem: (key: string, value: string) =>
          (store[key] = value.toString()),
        removeItem: (key: string) => delete store[key],
        clear: () => (store = {}),
      };
    })();

    Object.defineProperty(window, 'localStorage', {
      value: localStorageMock,
    });
  });

  beforeEach(() => {
    authStorage = new AuthStorageService();
    userStorage = new UserStorageService(authStorage);
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('should get token from localStorage', () => {
    const token = 'new token';
    localStorage.setItem('token', token);
    expect(authStorage.getToken()).toEqual(token);
  });

  it('should set token in localStorage', () => {
    const token = 'new token';
    authStorage.setToken(token);
    expect(authStorage.getToken()).toEqual(token);
  });

  it('should set token in localStorage', () => {
    const token = 'new token';
    localStorage.setItem('token', token);
    authStorage.removeToken();
    expect(authStorage.getToken()).toEqual(null);
  });

  // test UserStorageService

  it('should call getToken method of AuthStorageService', () => {
    const getTokenSpy = jest.spyOn(authStorage, 'getToken');
    userStorage.getUserToken();
    expect(getTokenSpy).toHaveBeenCalled();
  });

  it('should return the value set by setToken method', () => {
    const token = 'new token';
    localStorage.setItem('token', token);
    userStorage.getUserToken();
    expect(userStorage.getUserToken()).toEqual(token);
  });
});
