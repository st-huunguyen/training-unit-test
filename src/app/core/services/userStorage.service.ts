import { AuthStorageService } from './authStorage.service';

export class UserStorageService {
  private authStorageService: AuthStorageService;

  constructor(authStorageService: AuthStorageService) {
    this.authStorageService = authStorageService;
  }

  getUserToken() {
    const token = this.authStorageService.getToken();
    return token;
  }
}
