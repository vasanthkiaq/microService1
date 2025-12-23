export default class UserCreatedEvent {
  constructor({ userId, email, name, role, createdAt }) {
    this.type = 'user.created';
    this.payload = { userId, email, name, role, createdAt };
  }
}
