import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function CreateOrganization() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Create organization</h1>

      <form className="space-y-4">
        {/* {success === false && message && (
          <Alert variant="destructive">
            <AlertTriangle className="size-4" />
            <AlertTitle>Sign in failed!</AlertTitle>
            <AlertDescription>
              <p>{message}</p>
            </AlertDescription>
          </Alert>
        )} */}

        <div className="space-y-1">
          <Label htmlFor="name">Organization name</Label>
          <Input name="name" type="text" id="name" />
          {/* 
          {errors?.email && (
            <p className="text-xs font-medium text-red-500 dark:text-red-400">
              {errors.email[0]}
            </p>
          )} */}
        </div>

        <div className="space-y-1">
          <Label htmlFor="domain">Password</Label>
          <Input
            name="domain"
            type="password"
            id="domain"
            inputMode="url"
            placeholder="example.com"
          />
          {/* {errors?.password && (
            <p className="text-xs font-medium text-red-500 dark:text-red-400">
              {errors.password[0]}
            </p>
          )} */}
        </div>

        <div className="space-y-1">
          <div className="flex items-baseline space-x-2">
            <Checkbox
              name="shouldAttachUsersByDomain"
              id="shouldAttachUsersByDomain"
              className="translate-y-0.5"
            />
            <label htmlFor="shouldAttachUsersByDomain" className="space-y-1">
              <span className="text-sm font-medium leading-none">
                Auto-join new members
              </span>
              <p className="text-sm text-muted-foreground">
                This will automatically invite all members with same e-mail
                domain to this organization.
              </p>
            </label>
          </div>
        </div>

        <Button type="submit" className="w-full">
          {/* {isPending ? (
            <Loader2 className="size-4 animate-spin" />
          ) : ( */}
          Save organization
          {/* )} */}
        </Button>
      </form>
    </div>
  )
}
