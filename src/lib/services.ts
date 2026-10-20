/**
 * Entry points for future backend integrations.
 *
 * No authentication, contact or waitlist backend exists yet. These functions
 * deliberately transmit and store nothing, and report "unavailable" so the UI
 * can say so honestly. Replace their implementations when real services are
 * connected; the calling components already handle loading, success and error states.
 */

export type ServiceResult =
  | { status: "success" }
  | { status: "unavailable" }
  | { status: "error"; message?: string };

type Service<Input> = (input: Input) => Promise<ServiceResult>;

async function notConnected(): Promise<ServiceResult> {
  return { status: "unavailable" };
}

export const authService: {
  login: Service<{ email: string; password: string; remember: boolean }>;
  register: Service<{ fullName: string; email: string; password: string }>;
  requestPasswordReset: Service<{ email: string }>;
} = {
  login: notConnected,
  register: notConnected,
  requestPasswordReset: notConnected,
};

export const contactService: {
  send: Service<{ name: string; email: string; topic: string; message: string }>;
} = {
  send: notConnected,
};

export const waitlistService: {
  join: Service<{ email: string }>;
} = {
  join: notConnected,
};
