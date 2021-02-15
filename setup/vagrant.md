# Vagrant x Hyper-V

*Note: this was good in theory but proved problematic in implementation!  Went with Xubuntu desktop in Hyper-V in the end*

Decided on using Hyper-V as already present on my machine.  Reworking to use VirtualBox should be fairly trivial.

Create a virtual machine template

```sh
vagrant init hashicorp/bionic64
```

Start the machine using the hyperv provider

```sh
vagrant up --provider hyperv
```

> Bringing machine 'default' up with 'hyperv' provider...
> ==> default: Verifying Hyper-V is enabled...
> ==> default: Verifying Hyper-V is accessible...
> ==> default: Box 'hashicorp/bionic64' could not be found. Attempting to find and install...
>  default: Box Provider: hyperv
>  default: Box Version: >= 0
> ==> default: Loading metadata for box 'hashicorp/bionic64'
>  default: URL: https://vagrantcloud.com/hashicorp/bionic64
> ==> default: Adding box 'hashicorp/bionic64' (v1.0.282) for provider: hyperv
>  default: Downloading: https://vagrantcloud.com/hashicorp/boxes/bionic64/versions/1.0.282/providers/hyperv.box

This proceeded nicely until

> Failed to mount folders in Linux guest. This is usually because
> the "vboxsf" file system is not available. Please verify that
> the guest additions are properly installed in the guest and
> can work properly...
>
> mount error(13): Permission denied
> Refer to the mount.cifs(8) manual page (e.g. man mount.cifs)

Check to see if SMB1 is disabled

```powershell
Get-SmbServerConfiguration | Select EnableSMB1Protocol
```

Configure Vagrant to use a specific SMB version

```hcl
config.vm.synced_folder '.', '/vagrant', disabled: false, type: "smb", smb_host: <hostname/ip>, mount_options: ['vers=3.0']
```



```shell
vagrant halt
```

Remove the machine

```shell
vagrant destroy
```

https://www.vagrantup.com/docs/synced-folders/smb#smb_username
https://github.com/saschagottfried/fds-openmp-benchmark/issues/9
https://docs.microsoft.com/en-us/virtualization/community/team-blog/2017/20170706-vagrant-and-hyper-v-tips-and-tricks
https://medium.com/@scott.rangeley/create-and-provision-your-local-vm-with-vagrant-hyper-v-and-docker-machine-d1acf0571256
