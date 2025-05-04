// Expanded commands meant to emulate linux

import * as bin from './index';
import config from '../../../config.json';

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const cat = async (args: string[]): Promise<string> => {
  var file = args.join();
  if (!file) {
    return 'Meow';
  }
  else if (file == 'flag.txt'){
    return 'Flag{You got the flag}';
  }
    else if (file == '/etc/passwd'){
    return `root:x:0:0:root:/root:/bin/bash
daemon:x:1:1:daemon:/usr/sbin:/usr/sbin/nologin
bin:x:2:2:bin:/bin:/usr/sbin/nologin
sys:x:3:3:sys:/dev:/usr/sbin/nologin
sync:x:4:65534:sync:/bin:/bin/sync
games:x:5:60:games:/usr/games:/usr/sbin/nologin
man:x:6:12:man:/var/cache/man:/usr/sbin/nologin
lp:x:7:7:lp:/var/spool/lpd:/usr/sbin/nologin
mail:x:8:8:mail:/var/mail:/usr/sbin/nologin
news:x:9:9:news:/var/spool/news:/usr/sbin/nologin
nobody:x:65534:65534:nobody:/nonexistent:/usr/sbin/nologin
zerocool:x:1001:1001:Dade Murphy:/home/zerocool:/bin/bash
acidburn:x:1002:1002:Kate Libby:/home/acidburn:/bin/zsh
crashoverride:x:1003:1003:Alias of Dade Murphy:/home/crashoverride:/bin/bash
cereal:x:1004:1004:Emmanuel Goldstein:/home/cereal:/bin/fish
lordnikon:x:1005:1005:Paul Cook:/home/lordnikon:/bin/bash
phantomphreak:x:1006:1006:Ramon Sanchez:/home/phantomphreak:/bin/zsh
theplague:x:1007:1007:Eugene Belford:/home/theplague:/bin/bash
joey:x:1008:1008:Joey Pardella:/home/joey:/bin/bash
`;
  }
  else if (file == '/etc/shadow'){
    return `root:$6$rootPW$3lmZ.rH8S2cLIOY7uYx/MbkzP7jMg...:19402:0:99999:7:::
daemon:*:19402:0:99999:7:::
bin:*:19402:0:99999:7:::
sys:*:19402:0:99999:7:::
sync:*:19402:0:99999:7:::
games:*:19402:0:99999:7:::
man:*:19402:0:99999:7:::
lp:*:19402:0:99999:7:::
mail:*:19402:0:99999:7:::
news:*:19402:0:99999:7:::
nobody:*:19402:0:99999:7:::
zerocool:$6$0ut4g3$C6/XkUgGPWeF.Y6N2XmsI2UK/GEy...:19402:0:99999:7:::
acidburn:$6$g1rlp0w3r$U4LjypU7cHLW9xFbGV2KVReA...:19402:0:99999:7:::
crashoverride:$6$du4l1ty$X8fV1AeN2L6kzNLtPBe8KTx...:19402:0:99999:7:::
cereal:$6$spr1nkles$MzfsHKnYjkZm0Z2kOgXuWeG3...:19402:0:99999:7:::
lordnikon:$6$cl41rv0y4nt$0qYjFvAwOaWx0tPuFsL8zd...:19402:0:99999:7:::
phantomphreak:$6$p4ckets$S5J5oVfHMcWzEz2kVnNjZDf...:19402:0:99999:7:::
theplague:$6$Ellingson$As82DZnKvUmrKXNWpYe7CJ...:19402:0:99999:7:::
joey:$6$n00b$MzU0YjNhdmJjYXJnd2NmZGVm...:19402:0:99999:7:::`;
  }
    else if (file == '.garbage'){
    return `
///////(#@@@@@@@@@@@@%%%#####(((/(((((/////(((((((((#((##%%@@@@@@@@@@#//////////
((/////(&@@@@@@@@@&&&&%%#######((/////////////((((((#((####%@@@@@@@@@(//////////
(//////(#@@@@@@@@@&%#%@@&&&%%&&&&&%#((/////(#%%%&%&%%%&&####@@%@@@@@@///////////
////////(@@@@@&@@@%%#&&%########%%%%##(((((###(((((####%%#(#&&@@@@@@%///////////
////////%@@@@(@@@&%##%%%%%%%&@%&%##%%%#//(##%%%%%&%%%%##(#(##&&@@@@@&/*/////////
///////(@@@@@%%&@&%####%&&&%(%#/(((((##(((##((/##/(%%%#(((###%&@@@@@#/*/**//////
///////#@@@@@@(&@@&%#((##((#((((/((####(((((((((((((((((((##%#&@@@@@(****///////
////////(@@@@@@@@@&%%##(((/(/(//(((####(//(((((///////(((###%#&@@@@@@*****//////
//////////@@@@@@@@&%%%###(((((((#%####(////((##((///((((####%%%@@@@@@**/*///////
///////////%%@@@%@&%%%%###(((((##%&@@&#((((%&%####(((((####%%%%@@@@@@****///////
/////////////&@@@@@%%%%%%#######%%%&%@@@@&%%###############%%&@&@@@@&/**////////
///////////(//@@@@@&&%%%&#%##%%#&&&%%%#/(#%#%%&%%%%#######%%&@@@@@&&@/*****/////
/////////(///%@@@@@@&&%%%%###&@&@@&&&%((#((%&&&&&&@%######%&@@@@@@(%&**/*///////
//////////(%@@@@@@@@@@&%%%%##&%#%@&&&@@&@@&&%%#%##&######%%@@@@@@@@(/**/////////
/////#&%#@@@@@@@@@@@@@@&%&&%%%(((/%((((///((/(#%#(&%(###%%@@@@@@@&@@#///////////
//////#@@@@@@@@@@@@@@@@@@&@&%#(####///((////(/(##(#&%%%&&@@@@@@@@@@@@@@(////////
///////(@@@@@@@@@@@@@@@@@@@@#(#(##%%#(((///((#%%#((%&@@@@@@@@@@@@@@@@@@@#(//////
///////(@@@@@@@@@@@@@@@@@@@@@#(#######%%%##%%%##((#&@@@@@@@@@@@@@@%&@@@%&(//////
/////////#&@@@@@@@@@@@@@@@@@@@&%((#####&#%###(#((#%@@@@@@@@@@@@@@@(%/@@@////////
I had to move fast. The hacker copied my garbage file.`;
  }
    else if (file == '/proc/meminfo'){
    return `
MemTotal:        2865988 kB
MemFree:          425868 kB
MemAvailable:     891804 kB
Buffers:           59864 kB
Cached:           509712 kB
SwapCached:        50156 kB
Active:          1090448 kB
Inactive:        1056140 kB
Active(anon):     771180 kB
Inactive(anon):   849068 kB
Active(file):     319268 kB
Inactive(file):   207072 kB
Unevictable:           0 kB
Mlocked:               0 kB
SwapTotal:       2935804 kB
SwapFree:        2590460 kB
Dirty:               908 kB
Writeback:             0 kB
AnonPages:       1397616 kB
Mapped:           263528 kB
Shmem:             62148 kB
Slab:             210792 kB
SReclaimable:     128572 kB
SUnreclaim:        82220 kB
KernelStack:       11180 kB
PageTables:        17192 kB
NFS_Unstable:          0 kB
Bounce:                0 kB
WritebackTmp:          0 kB
CommitLimit:     4368796 kB
Committed_AS:    6157468 kB
VmallocTotal:   34359738367 kB
VmallocUsed:           0 kB
VmallocChunk:          0 kB
Percpu:             2144 kB
HardwareCorrupted:     0 kB
AnonHugePages:    462848 kB
ShmemHugePages:        0 kB
ShmemPmdMapped:        0 kB
HugePages_Total:       0
HugePages_Free:        0
HugePages_Rsvd:        0
HugePages_Surp:        0
Hugepagesize:       2048 kB
Hugetlb:               0 kB
DirectMap4k:      230256 kB
DirectMap2M:     2705408 kB
DirectMap1G:           0 kB`;
  }
  else
    return `
cat: ${file} : No such file or directory`;
};

export const ls = async (args: string[]): Promise<string> => {
  var param = args.join();
  if (!param) {
    return `
documents	medical 	private 	taxes
malware		photos		projects	flag.txt`;
  }
  else if (param == '-l'){
    return `
drwxr-----  8 bob bob 4096 Jan   3 20:31 documents
drwxr-----  8 bob bob 4096 Jan  13 07:11 malware
drwxr-----  8 bob bob 4096 Feb  38 09:22 medical
drwxr-----  8 bob bob 4096 Feb   1 01:44 photos
drwxr-----  8 bob bob 4096 May  30 12:14 private
drwxr-----  8 bob bob 4096 Jun  22 16:22 projects
drwxr-----  8 bob bob 4096 Jan  12 21:46 private
drwxr-----  8 bob bob 4096 Apr  12 12:52 taxes
-rw-r--r--  1 bob bob  546 Jan  28 20:22 flag.txt`;
  }
  else if (param == '-la' || param == '-al' ){
    return `
drwxr-xr-x 19 root root  4096 Sep  15 19:38 .
drwxr-xr-x 19 root root  4096 Sep  15 19:38 ..
drwxr-----  8 bob bob 4096 Jan   3 20:31 documents
drwxr-----  8 bob bob 4096 Sep  15 20:31 .garbage
drwxr-----  8 bob bob 4096 Jan  13 07:11 malware
drwxr-----  8 bob bob 4096 Feb  38 09:22 medical
drwxr-----  8 bob bob 4096 Feb   1 01:44 photos
drwxr-----  8 bob bob 4096 May  30 12:14 private
drwxr-----  8 bob bob 4096 Jun  22 16:22 projects
drwxr-----  8 bob bob 4096 Jan  12 21:46 private
drwxr-----  8 bob bob 4096 Apr  12 12:52 taxes
-rw-r--r--  1 bob bob  546 Jan  28 20:22 flag.txt`;
  }
  else if (param == '-a'){
    return `
.			.garbage	photos		taxes
..			malware		private		flag.txt
documents	medical		projects`;
  }
  else
    return `
documents	medical 	private 	taxes
malware		photos		projects	flag.txt`;
};

export const more = async (args: string[]): Promise<string> => {
  var file = args.join();
  if (!file) {
    return 'Please sir, can I have some';
  }
  else if (file == 'flag.txt'){
    return 'Flag{You got the flag}';
  }
      else if (file == '.garbage'){
    return `
///////(#@@@@@@@@@@@@%%%#####(((/(((((/////(((((((((#((##%%@@@@@@@@@@#//////////
((/////(&@@@@@@@@@&&&&%%#######((/////////////((((((#((####%@@@@@@@@@(//////////
(//////(#@@@@@@@@@&%#%@@&&&%%&&&&&%#((/////(#%%%&%&%%%&&####@@%@@@@@@///////////
////////(@@@@@&@@@%%#&&%########%%%%##(((((###(((((####%%#(#&&@@@@@@%///////////
////////%@@@@(@@@&%##%%%%%%%&@%&%##%%%#//(##%%%%%&%%%%##(#(##&&@@@@@&/*/////////
///////(@@@@@%%&@&%####%&&&%(%#/(((((##(((##((/##/(%%%#(((###%&@@@@@#/*/**//////
///////#@@@@@@(&@@&%#((##((#((((/((####(((((((((((((((((((##%#&@@@@@(****///////
////////(@@@@@@@@@&%%##(((/(/(//(((####(//(((((///////(((###%#&@@@@@@*****//////
//////////@@@@@@@@&%%%###(((((((#%####(////((##((///((((####%%%@@@@@@**/*///////
///////////%%@@@%@&%%%%###(((((##%&@@&#((((%&%####(((((####%%%%@@@@@@****///////
/////////////&@@@@@%%%%%%#######%%%&%@@@@&%%###############%%&@&@@@@&/**////////
///////////(//@@@@@&&%%%&#%##%%#&&&%%%#/(#%#%%&%%%%#######%%&@@@@@&&@/*****/////
/////////(///%@@@@@@&&%%%%###&@&@@&&&%((#((%&&&&&&@%######%&@@@@@@(%&**/*///////
//////////(%@@@@@@@@@@&%%%%##&%#%@&&&@@&@@&&%%#%##&######%%@@@@@@@@(/**/////////
/////#&%#@@@@@@@@@@@@@@&%&&%%%(((/%((((///((/(#%#(&%(###%%@@@@@@@&@@#///////////
//////#@@@@@@@@@@@@@@@@@@&@&%#(####///((////(/(##(#&%%%&&@@@@@@@@@@@@@@(////////
///////(@@@@@@@@@@@@@@@@@@@@#(#(##%%#(((///((#%%#((%&@@@@@@@@@@@@@@@@@@@#(//////
///////(@@@@@@@@@@@@@@@@@@@@@#(#######%%%##%%%##((#&@@@@@@@@@@@@@@%&@@@%&(//////
/////////#&@@@@@@@@@@@@@@@@@@@&%((#####&#%###(#((#%@@@@@@@@@@@@@@@(%/@@@////////
I had to move fast. The hacker copied my garbage file.`;
}
  else
    return `
more: stat of ${file} failed: No such file or directory`;
};

function printWithDelay(text, delay) {
  let i = 0;
  const intervalId = setInterval(() => {
    if (i < text.length) {
      console.log(text[i]);
      i++;
    } else {
      clearInterval(intervalId);
    }
  }, delay);
}

export const kill = async (args: string[]): Promise<string> => {
  var param = args.join();
  if (param == '2347'){
    document.getElementById("myDiv").style.backgroundColor = "red";
    return `
Kernel bug detected[#1]:
Cpu 0
$ 0   : 00000000 00000000 0fffff00 0fffff00
$ 4   : c6800000 850b7780 8b0043c0 00000040
$ 8   : 000004ac 000004ac 00000002 844e8000
$12   : 00000000 feced300 8430d2ac 0000000a
$16   : 00000040 000000fc 8b759300 00000001
$20   : 00000012 84370000 00000004 00000009
$24   : 00000000 8403d4f4                  
$28   : 8b1c0000 8b1c3ee0 0000000a 84255764
Hi    : 003d08ef
Lo    : 79432700
epc   : 840a754c 0x840a754c
    Tainted: P          
ra    : 84255764 0x84255764
Status: 1100dc03    KERNEL EXL IE 
Cause : 00800034
PrId  : 00019749 (MIPS 74Kc)
Modules linked in: em8xxxcursor(P) em8xxxfb em8xxxcopybit(P) pmem_rua em8xxx(P) llad(P)
Process events/0 (pid: 4, threadinfo=8b1c0000, task=8b0323d8, tls=00000000)
Stack : 8b0323d8 8402d074 843d0c68 843d10e8 8b1c3f80 8b0323d8 843d0cc8 8b2d6de8
        8b2d6de8 8402d194 00000003 00000000 00000000 84300000 84374104 8b124c80
        84255238 fffffffc efffffff 8431d16c 8431d1a4 00000000 00000000 8404c364
        8404cc6c 00000001 8b124c88 8b124c80 8b124c88 8b124c80 8b1c3f80 00000000
        00000000 00000000 00000000 8404cc04 8b03254c 8b03254c 84051638 00000000
        ...
Call Trace:[<8402d074>] 0x8402d074
[<8402d194>] 0x8402d194
[<84255238>] 0x84255238
[<8404c364>] 0x8404c364
[<8404cc6c>] 0x8404cc6c
[<8404cc04>] 0x8404cc04
[<84051638>] 0x84051638
[<84051b14>] 0x84051b14
[<8404cba8>] 0x8404cba8
[<84051650>] 0x84051650
[<8401504c>] 0x8401504c


Code: 3c030fff  3463ff00  00431024 <00028036> 09029cfd  24050001  27bdffc8  0085102b  afb7002c 
Kernel panic - not syncing: Fatal exception in interrupt`;
  }
  else
    return `
kill: usage: kill [-s sigspec | -n signum | -sigspec] pid | jobspec ... or kill -l [sigspec]`;
};

export const history = async (args: string[]): Promise<string> => {
  return `
Four score and seven years ago our fathers brought forth, on this continent, a new nation, conceived in Liberty, and dedicated to the proposition that all men are created equal.

Now we are engaged in a great civil war, testing whether that nation, or any nation so conceived, and so dedicated, can long endure. We are met on a great battle-field of that war. We have come to dedicate a portion of that field, as a final resting-place for those who here gave their lives, that that nation might live. It is altogether fitting and proper that we should do this.

But, in a larger sense, we can not dedicate, we can not consecrate we can not hallow this ground. The brave men, living and dead, who struggled here, have consecrated it far above our poor power to add or detract. The world will little note, nor long remember what we say here, but it can never forget what they did here. It is for us the living, rather, to be dedicated here to the unfinished work which they who fought here have thus far so nobly advanced. It is rather for us to be here dedicated to the great task remaining before us that from these honored dead we take increased devotion to that cause for which they here gave the last full measure of devotion - that we here highly resolve that these dead shall not have died in vain that this nation, under God, shall have a new birth of freedom, and that government of the people, by the people, for the people, shall not perish from the earth.`; 
};

export const w = async (args: string[]): Promise<string> => {
  return `
10:34:11 up 442 days,  2:12,    2 users,    load average: 2.33, 1.05, 1.76
USER     TTY      FROM             LOGIN@   IDLE   JCPU   PCPU WHAT
user     pts/0    98.249.36.117    19:18    1.00s  0.14s  0.01s w
bob      tty2     tty2             11:11    8:06m  0.02s  0.02s /usr/libexec/gnome-session-binary --session=ubuntu`; 
};

export const touch = async (args: string[]): Promise<string> => {
  return `touch: cannot touch '${args[0]}': Permission denied`; 
};

export const ps = async (args: string[]): Promise<string> => {
  return `
    PID TTY          TIME CMD
   2347 pts/0    00:00:00 bash
   1337 pts/0    00:00:01 hacker
   2049 pts/0    00:00:00 worm.sh
   3133 pts/0    00:00:02 gibson-monitor
   4659 pts/0    00:00:00 ps`; 
};

export const uptime = async (args: string[]): Promise<string> => {
  return `
10:34:11 up 442 days,  2:12,    2 users,    load average: 2.33, 1.05, 1.76`; 
};

export const pwd = async (args: string[]): Promise<string> => {
  return `/home/bob`; 
};

export const cd = async (args: string[]): Promise<string> => {
  return `cd: permission denied: ${args[0]}`; 
};

export const rm = async (args: string[]): Promise<string> => {
  if (args.length === 0) {
    return `rm: missing operand
Try 'rm --help' for more information.`;
  }

  const protectedPaths = [
    '/proc/kcore',
    '/sys/kernel/debug',
    '/dev/tty',
    '/run/udev',
    '/var/run/dbus',
    '/home/zerocool/.bashrc',
    '/etc/shadow',
    '/sbin/init',
    '/usr/bin/python3',
    '/lib/modules',
    '/boot/vmlinuz',
    '/etc/hosts',
    '/var/log/syslog',
    '/usr/lib/systemd/systemd',
    '/dev/sda',
    '/mnt/usb',
    '/opt/firmware',
    '/media/cdrom',
    '/root/.ssh/authorized_keys',
    '/tmp/.X11-unix'
  ];

  const errorMessages = {
    'Operation not permitted': [
      '/proc/kcore',
      '/sys/kernel/debug',
      '/lib/modules',
      '/opt/firmware'
    ],
    'Device or resource busy': [
      '/dev/tty',
      '/run/udev',
      '/var/run/dbus',
      '/mnt/usb',
      '/media/cdrom',
      '/tmp/.X11-unix'
    ],
    'Permission denied': [
      '/home/zerocool/.bashrc',
      '/etc/shadow',
      '/etc/hosts',
      '/var/log/syslog',
      '/root/.ssh/authorized_keys'
    ],
    'Text file busy': [
      '/sbin/init',
      '/usr/bin/python3',
      '/boot/vmlinuz',
      '/usr/lib/systemd/systemd'
    ]
  };

  let output = '';

  for (const path of args) {
    let errorFound = false;
    for (const [error, paths] of Object.entries(errorMessages)) {
      if (paths.includes(path)) {
        output += `rm: cannot remove '${path}': ${error}\n`;
        errorFound = true;
        break;
      }
    }
    if (!errorFound) {
      output += `rm: cannot remove '${path}': No such file or directory\n`;
    }
  }

  return output.trim();
};

export const nc = async (args: string[]): Promise<string> => {
  const joinedArgs = args.join(' ');
  if (joinedArgs === '-lvp 1337') {
    return `
listening on [any] 1337 ...
connect to [127.0.0.1] from gibson.corp [172.16.204.55] 31337`;
  } else {
    return `nc: invalid or unsupported arguments: ${joinedArgs}`;
  }
};

export const cp = async (args: string[]): Promise<string> => {
  return `cp: cannot create regular file '${args[0]}': Permission denied`; 
};

export const free = async (args: string[]): Promise<string> => {
  return `
              total        used        free      shared  buff/cache   available
Mem:        2865988     1756908      402980       62148      706100      877848
Swap:       2935804      345344     2590460`; 
};

export const df = async (args: string[]): Promise<string> => {
  return `
Filesystem     1K-blocks     Used Available Use% Mounted on
udev             1418104        0   1418104   0% /dev
tmpfs             286600    30192    256408  11% /run
/dev/vda1       56977256 11935260  42131744  23% /
tmpfs            1432992        0   1432992   0% /dev/shm
tmpfs               5120        0      5120   0% /run/lock
tmpfs             286596        0    286596   0% /run/user/0`; 
};

export const uname = async (args: string[]): Promise<string> => {
  var param = args.join();
  if (param == '-a'){
    return `
Linux g-server001.gibson.local 4.19.0-23-amd64 #1 SMP Debian 4.19.269-1 (2022-12-20) x86_64 GNU/Linux`;
  }
  else
    return `
Linux`;
};

export const hacktheplanet = async () => {
  return `
MESS WITH THE BEST, DIE LIKE THE REST.
🔥🌎💻 Hack the Planet! 💻🌎🔥
`;
};

export const nmap = async (args: string[]): Promise<string> => {
  if (!args.length) {
    return `nmap: failed to resolve given hostname/IP: Name or service not known
Usage: nmap [Scan Type(s)] [Options] <host or net>
Try 'man nmap' for more information.`;
  }

  const target = args[0];

  // Simulated output for gibson.corp
  if (target === 'gibson.corp') {
    return `
Starting Nmap 7.93 ( https://nmap.org ) at 2025-05-03 22:00
Nmap scan report for gibson.corp (172.16.204.55)
Host is up (0.023s latency).
Not shown: 997 closed ports
PORT     STATE SERVICE
22/tcp   open  ssh
80/tcp   open  http
31337/tcp open  elite
`;
  }

  // For anything else:
  return `
Starting Nmap 7.93 ( https://nmap.org ) at 2025-05-03 22:00
Nmap scan report for ${target}
Host is up (0.044s latency).
Not shown: 999 closed ports
PORT     STATE SERVICE
22/tcp   open  ssh
`;
};

export const crontab = async (args: string[]): Promise<string> => {
  if (args[0] === '-l') {
    return `
*/5 * * * * /usr/bin/nmap -sS gibson.corp >> /var/log/scan.log
@reboot /bin/bash /home/zerocool/worm.sh
0 3 * * * /usr/local/bin/send_logs.sh
13 4 * * 0 /usr/bin/python3 /home/bob/scripts/data_leech.py --target=gibson.corp
@monthly curl -X POST http://172.16.204.99:9000/payload
`;
  }

  return `crontab: usage error: unknown option '${args[0]}'\nTry 'crontab -l' to list your current crontab entries.`;
};

export const fortune = async (): Promise<string> => {
  const quotes = [
    "Hack the planet!",
    "Even root has a boss.",
    "rm -rf / — because you like living dangerously.",
    "Permission denied. Again.",
    "Access granted... just kidding.",
    "The Plague is watching you.",
    "Zero Cool was here.",
    "Rebooting is just a fancy logout.",
    "There is no cloud. Just someone else's computer.",
    "Your kernel has panicked. You should too."
  ];

  const pick = quotes[Math.floor(Math.random() * quotes.length)];
  return pick;
};

export const cowsay = async (args: string[]): Promise<string> => {
  const message = args.join(' ') || 'Moo.';

  const topBorder = '_'.repeat(message.length + 2);
  const bottomBorder = '-'.repeat(message.length + 2);

  return `
 ${topBorder}
< ${message} >
 ${bottomBorder}
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||`;
};

const fakeDNS: { [host: string]: string } = {
  'gibson.corp': '172.16.204.55',
  'icewall.gibson': '172.16.0.1',
  'localhost': '127.0.0.1',
  'google.com': '142.250.72.14',
  'facebook.com': '157.240.20.35',
  'twitter.com': '104.244.42.1',
  'nsa.gov': '198.51.100.7',            // Reserved test IP
  'hackernews.com': '192.0.2.66',       // Reserved test IP
  'reddit.com': '151.101.65.140',
  'example.com': '93.184.216.34',
  'hacktheplanet.tv': '10.42.42.42',
  'skynet.global': '203.0.113.99',      // Reserved test IP
  'zero.cool': '133.7.13.37',
  'ellingson.min': '172.31.13.37',
};

export const ping = async (args: string[]): Promise<string> => {
  if (!args.length) {
    return `ping: usage error: Destination address required\nUsage: ping <destination>`;
  }

  const host = args[0];
  const ip = fakeDNS[host];

  if (!ip) {
    return `ping: unknown host ${host}`;
  }

  // Simulated dynamic latency (50-80 ms range)
  const latency = () => (50 + Math.floor(Math.random() * 30));

  return `PING ${host} (${ip}) 56(84) bytes of data.
64 bytes from ${ip}: icmp_seq=1 ttl=64 time=${latency()}.1 ms
64 bytes from ${ip}: icmp_seq=2 ttl=64 time=${latency()}.7 ms
64 bytes from ${ip}: icmp_seq=3 ttl=64 time=${latency()}.3 ms
64 bytes from ${ip}: icmp_seq=4 ttl=64 time=${latency()}.9 ms

--- ${host} ping statistics ---
4 packets transmitted, 4 received, 0% packet loss, time 3004ms
rtt min/avg/max = ${latency()}.1/${latency()}.5/${latency()}.9 ms`;
};

export const sudo = async (args?: string[]): Promise<string> => {
  return `${config.ps1_username} is not in the sudoers file.  This incident will be reported.`;
};

// End of File
