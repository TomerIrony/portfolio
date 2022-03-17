import React from 'react';

function GoogleCloud(props) {
  return (
    <div className="article__flex">
      <h1>Setting up a Google Cloud server</h1>
      <div>
        <h2>Register</h2>
        <p>
          We're going to use{' '}
          <a
            className="article__link"
            rel="noreferrer"
            target="_blank"
            href="https://cloud.google.com/"
          >
            Google Cloud Platform
          </a>
          . If it's your first time using it, you'll get a free trial for 90
          days which includes $300 credit.
          <br />
          <br /> Click the "Get started for free" button in the top-right corner
          and you'll see a registration form.
          <br />
          <br />
          Choose an individual account type, add a credit card and proceed!
          Google promises not to charge your account automatically after the
          free trial ends.
        </p>
      </div>
      <div>
        <h2>Create a Virtual Machine</h2>
        <p>
          Hover on "Compute Engine" in the menu on the left and choose the top
          "VM Instances"
          <br />
          <br />
          On the opened page, enable the Compute Engine API.
          <br />
          <br />
          Now, create a virtual machine instance by clicking the highlighted
          button.
          <br />
          Set a name for your virtual machine
          <br />
          <br />
          For the machine configuration, choose the "E2" series, and the
          "e2-micro" machine type. This type of machine is part of the{' '}
          <a
            className="article__link"
            rel="noreferrer"
            target="_blank"
            href="https://cloud.google.com/free/docs/gcp-free-tier/#compute"
          >
            free tier program
          </a>
          . You can see that Google Cloud still gives an estimated cost after
          you chose the machine type, but you won't be charged until it has
          exceeded the number of hours equal to the total hours in the current
          month
          <br />
          <br />
          Choose the standard persistent disk with <u>Ubuntu 20.04 LTS</u>.
          <br />
          <br />
          Make sure you select both "Allow HTTP traffic" and "Allow HTTPS
          traffic" boxes. These will open ports 80 and 443 of your machine by
          default. (We'll open the port 3000 later on).
        </p>
      </div>
      <div>
        <h2>Generating an SSH key</h2>
        <p>
          If you know you already have an SSH key, you can skip generating it
          and use the one you already have. But if you're not sure, or you don't
          have one, you must generate one.{' '}
          <a
            className="article__link"
            rel="noreferrer"
            target="_blank"
            href="https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent"
          >
            Follow these steps on the github documentation
          </a>{' '}
          to create a new SSH key.
          <br />
          <br />
          Once you've created a key, copy the public key (usually at
          ~/.ssh/id_ed25519.pub). You can print it out to the terminal with cat
          ~/.ssh/id_ed25519.pub. Make sure you copy the public key, not the
          private key. The private key is usually at ~/.ssh/id_ed25519 (with no
          .pub at the end)
          <br />
          <br />
          The public key will look like: ssh-ed25519 [many random numbers and
          letters]== youremail@example.com
          <br />
          <br />
          Expand the "Management, security, disks, networking, sole tenancy"
          section at the bottom click the "Security" tab, and paste your public
          key into the "Enter public SSH key" box at the bottom.
          <br />
          <br />
          After you click "Create" and a green checkmark appears on the left of
          your virtual machine's name, you'll be able to connect to it.
        </p>
      </div>
      <div>
        <h2>Connect</h2>
        <p>
          Connecting is as simple as pressing the SSH button in the Connect
          column. This will open a pop-up window with a terminal in it that has
          a live connection. Great! Your machine is live.
          <br />
          <br />
          Take note of the username displayed on the prompt here (before the @
          in green, seen as elise_bouer in the screenshot). This is the username
          you will use when connecting via SSH on your own terminal.
          <br />
          <br />
          Also, take note of the <b>external</b> IP address listed for your
          instance on the VM page.
        </p>
      </div>
      <div>
        <h2>Connecting via your own terminal</h2>
        <p>
          In your local terminal, you can connect to your VM with the following
          commands. Replace the username and IP address with the ones you saw in
          the previous step.
          <br />
          <code>
            ssh-add ~/.ssh/id_ed25519 #{' '}
            <i>
              or whatever ssh key path you chose ssh elise_bouer@24.121.126.87
            </i>
          </code>
          <br />
          <br />
          It will likely show a message like this the first time you connect:
          <br />
          <code>
            The authenticity of host '24.121.126.87 (24.121.126.87)' can't be
            established. <br /> ECDSA key fingerprint is
            SHA256:4VuBWyupTo47qQNchEp1siEBxTh8An7thZbL2E3bDjY.
            <br /> Are you sure you want to continue connecting (yes/no)?{' '}
          </code>
          <br />
          <br />
          Type "yes" and press enter.
          <br />
          <br />
          If all is successful, you will see a new command prompt that looks the
          same as the one displayed in the above screenshot (when connecting via
          the "SSH" button).
        </p>
      </div>
      <div>
        <h2>Open an Additional Port</h2>
        <p>
          Now all that's left is to open port 3000. Go to the Firewall rules in
          the Google Cloud Console:
          <a
            className="article__link"
            rel="noreferrer"
            target="_blank"
            href="https://console.cloud.google.com/networking/firewalls/list"
          >
            https://console.cloud.google.com/networking/firewalls/list
          </a>
          <br />
          <br />
          You'll be able to see that ports 80 and 443 are indeed already open.
          Click the "Create firewall rule" button at the top of the page.
          <br />
          <br />
          You need to give the rule an arbitrary lowercase name:
          <br />
          <br />
          An arbitrary tag (I used port3000), and this source IP range:
          0.0.0.0/0.
          <br />
          <br />
          Click "Create" and make sure that the new port is now added to the
          list of Firewall rules.
          <br />
          <br />
          To make this rule apply to the VM we've created, we now just have to
          add the port3000 tag to our VM. Go back to the Compute Engine > VM
          Instances page, and click on the name of your instance to go to its
          page.
          <br />
          <br />
          Click the "Edit" button. Then add port3000 to the list of tags, and
          press "save" at the bottom of the page.
          <br />
          <br />
          Now connect to your virtual machine again, and you're ready to make
          the server ready to use.
        </p>
      </div>
    </div>
  );
}

export default GoogleCloud;
