import { IocContainer } from "@tsoa/runtime"
import { container } from "tsyringe"

/**
 * Custom container wrapper for dependency injection in `tsoa` constrollers.
 */
export const iocContainer: IocContainer = {
  get: <T>(controller: { prototype: T }): T => {
    return container.resolve<T>(controller as never)
  }
}
